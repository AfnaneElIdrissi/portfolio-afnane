<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'Portfolio')</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@3.3.2/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-100">

    <!-- Navbar -->
    <nav class="bg-white shadow-md">
        <div class="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
            <a href="{{ url('/') }}" class="font-bold text-xl text-gray-800">Portfolio</a>
            
            <div class="space-x-4">
                @auth
                    <span class="text-gray-700">{{ auth()->user()->name }}</span>
                    
                    @if(auth()->user()->is_admin)
                        <a href="{{ route('admin.dashboard') }}" class="text-blue-600 hover:underline">Admin</a>
                    @endif

                    <form method="POST" action="{{ route('logout') }}" class="inline">
                        @csrf
                        <button type="submit" class="text-red-600 hover:underline">Se déconnecter</button>
                    </form>
                @else
                    <a href="{{ route('login') }}" class="text-blue-600 hover:underline">Connexion</a>
                    <a href="{{ route('register') }}" class="text-blue-600 hover:underline">S’inscrire</a>
                @endauth
            </div>
        </div>
    </nav>

    <div class="flex min-h-screen">
        <!-- Sidebar -->
        @auth
        @if(auth()->user()->is_admin)
        <aside class="w-64 bg-white shadow-md p-4 hidden md:block">
            <h2 class="font-bold text-lg mb-4">Admin Panel</h2>
            <ul class="space-y-2">
                <li><a href="{{ route('admin.dashboard') }}" class="text-gray-700 hover:text-blue-600">Dashboard</a></li>
                <li><a href="{{ route('projects.index') }}" class="text-gray-700 hover:text-blue-600">Projets</a></li>
                <li><a href="{{ route('users.index') }}" class="text-gray-700 hover:text-blue-600">Utilisateurs</a></li>
            </ul>
        </aside>
        @endif
        @endauth

        <!-- Content -->
        <main class="flex-1 p-6">
            @yield('content')
        </main>
    </div>

</body>
</html>
