<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 font-sans">

    <!-- Navbar -->
    <nav class="bg-blue-600 text-white p-4 flex justify-between items-center">
        <div class="text-lg font-bold">Mon Portfolio - Admin</div>
        <div>
            <span>{{ auth()->user()->name }}</span>
            <a href="{{ route('logout') }}" class="ml-4 bg-red-500 px-3 py-1 rounded hover:bg-red-600">Logout</a>
        </div>
    </nav>

    <div class="flex">

        <!-- Sidebar -->
        <aside class="w-64 bg-white h-screen shadow-md">
            <ul class="mt-6">
                <li class="p-4 hover:bg-gray-100"><a href="{{ route('admin.dashboard') }}">Dashboard</a></li>
                <li class="p-4 hover:bg-gray-100"><a href="{{ route('users.index') }}">Utilisateurs</a></li>
                <li class="p-4 hover:bg-gray-100"><a href="{{ route('projects.index') }}">Projets</a></li>
                <li class="p-4 hover:bg-gray-100"><a href="{{ route('settings.index') }}">Paramètres</a></li>
            </ul>
        </aside>

        <!-- Main content -->
        <main class="flex-1 p-6">
            <h1 class="text-3xl font-bold mb-6">Dashboard Admin</h1>

            <!-- Statistiques -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h2 class="text-xl font-bold mb-2">Total Utilisateurs</h2>
                    <p class="text-gray-700 text-2xl">{{ \App\Models\User::count() }}</p>
                </div>

                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h2 class="text-xl font-bold mb-2">Total Projets</h2>
                    <p class="text-gray-700 text-2xl">{{ \App\Models\Project::count() }}</p>
                </div>

                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h2 class="text-xl font-bold mb-2">Admin Connecté</h2>
                    <p class="text-gray-700">{{ auth()->user()->name }}</p>
                    <p class="text-gray-500 text-sm">{{ auth()->user()->email }}</p>
                </div>
            </div>

            <!-- Actions rapides -->
            <div class="mt-8">
                <h2 class="text-2xl font-bold mb-4">Actions Rapides</h2>
                <div class="flex space-x-4">
                    <a href="{{ route('projects.index') }}" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Gérer Projets</a>
                    <a href="{{ route('users.index') }}" class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Gérer Utilisateurs</a>
                    <a href="{{ route('settings.index') }}" class="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">Paramètres</a>
                </div>
            </div>

            <!-- Section Graphiques / Stats Avancées -->
            <div class="mt-8">
                <h2 class="text-2xl font-bold mb-4">Statistiques Avancées</h2>
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <p class="text-gray-700">Ici vous pouvez ajouter vos graphiques ou tableaux dynamiques</p>
                    <p class="text-gray-500 text-sm">Ex: nombre de projets par catégorie, utilisateurs actifs, etc.</p>
                </div>
            </div>
        </main>
    </div>

</body>
</html>
