<script setup>
// TODO some logic here.
</script>

<template>
  <div class="flex">
    <div class="w-full max-w-lg mx-auto mt-4">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email" type="text" placeholder="Email">
          <p class="text-gray-500 text-xs italic">Give us your email.</p>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Username
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username" type="text" placeholder="Username">
          <p class="text-gray-500 text-xs italic">Please choose a username.</p>
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password" type="password" placeholder="Password">
          <p class="text-gray-500 text-xs italic">Please choose a password.</p>
        </div>
        <div class="flex items-center justify-around">
          <button
            class="bg-blue-500 hover:bg-blue-700 px-2 py-1 text-white rounded focus:outline-none focus:shadow-outline"
            type="button">
            Sign Up
          </button>
          <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
            Already have an account?
          </a>
        </div>
      </form>
      <p class="text-center text-gray-500 text-xs">
        &copy;2024 My Corp. All rights reserved.
      </p>
    </div>
  </div>
</template>

<style scoped></style>
