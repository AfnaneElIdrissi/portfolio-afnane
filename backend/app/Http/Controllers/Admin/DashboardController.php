<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Project; // si tu as des projets
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $totalUsers = User::count();
        $totalProjects = Project::count();
        $latestUsers = User::latest()->take(5)->get();

        return view('admin.dashboard', compact('totalUsers', 'totalProjects', 'latestUsers'));
    }
}
