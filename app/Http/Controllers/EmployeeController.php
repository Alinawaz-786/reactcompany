<?php

namespace App\Http\Controllers;

use App\Employee;
use Illuminate\Auth\Events\Validated;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    //
    public function index()
    {
        $list = Employee::paginate(5);
        return response()->json(['list' => $list]);
    }

    public function store(Request $request)
    {
        $input = $request->all();

        $validator = \Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'email|required'
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors(), 'status' => 422]);
        }
        $data = [
            'name' => $input['name'],
            'email' => $input['email'],
            'phone' => $input['phone']
        ];
        $result = Employee::create($data);
        return response()->json(['result' => $result]);
    }

    public function update(Request $request)
    {
        $input = $request->all();
        $employee = Employee::find($input['id']);
        $updated = $employee->update($input);
        return response()->json(['result' => $updated]);

    }

    public function destroy($id)
    {
        return response()->json(['result' => Employee::destroy($id)]);

    }
}
