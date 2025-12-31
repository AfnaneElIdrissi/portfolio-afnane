<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        // Vérifie si l'utilisateur est connecté et est admin
        if (Auth::check() && Auth::user()->is_admin) {
            return $next($request); // Laisse passer
        }

        // Sinon, redirige vers la page d'accueil ou une page "non autorisée"
        return redirect('/')->with('error', "Vous n'êtes pas autorisé à accéder à cette page.");
    }
}