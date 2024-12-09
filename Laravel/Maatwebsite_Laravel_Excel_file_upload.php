Step 1: Install the Package

composer require maatwebsite/excel

Step 2: Publish the Configuration

php artisan vendor:publish --provider="Maatwebsite\Excel\ExcelServiceProvider"

Step 3: Create an Import Class

php artisan make:import UsersImport --model=User

app/Imports/UsersImport.php

<?php

namespace App\Imports;

use App\Models\User;
use Maatwebsite\Excel\Concerns\ToModel;

class UsersImport implements ToModel
{
    /**
     * Each row from the Excel file is passed to this function.
     */
    public function model(array $row)
    {
        return new User([
            'name'  => $row[0],
            'email' => $row[1],
            'password' => bcrypt($row[2]),
        ]);
    }
}


?>
Step 4: Create a Controller

<?php 

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;
use App\Imports\UsersImport;

class ExcelController extends Controller
{

   public function customer_inactive_import_store(Request $request)
        {

            $request->validate([
                'file' => 'required|mimes:xlsx,xls'
            ]);

            try {
                $excelDataArray = \Maatwebsite\Excel\Facades\Excel::toArray(new CustomerImport(), $request->file);

                foreach ($excelDataArray[0] as $key => $row) {
                    // Skip the header row
                    if ($key == 0) {
                        continue;
                    }

                    if (!isset($row[0]) || !isset($row[1])) {
                        continue;
                    }

                    $customerCode = trim($row[0]);
                    $status = strtoupper(trim($row[1]));

                    $customer = Customer::where('CustomerCode', $customerCode)->first();

                    if ($customer) {
                        $customer->Active = $status === 'Y' ? 'Y' : 'N';
                        $customer->save();
                    }
                }

                Toastr::success('Data uploaded successfully', 'Good Job!', ["positionClass" => "toast-top-right"]);
            } catch (\Exception $e) {
                Toastr::error('Data upload failed. Error: ' . $e->getMessage(), 'Oops!', ["positionClass" => "toast-top-right"]);
            }

            // Redirect to the customers index view
            return redirect()->route('customers.index');
        }
}












