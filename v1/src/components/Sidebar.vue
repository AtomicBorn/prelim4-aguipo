<template>
  <div class="sidebar" data-background-color="dark">
    <div class="sidebar-logo">
      <div class="logo-header" data-background-color="dark">
        <img
          src="/src/assets/img/kaiadmin/logo_light.svg"
          alt="navbar brand"
          class="navbar-brand"
          height="20"
        />
      </div>
    </div>
    <div class="sidebar-wrapper scrollbar scrollbar-inner">
      <div class="sidebar-content">
        <ul class="nav nav-secondary">
          <li class="nav-section">
            <span class="sidebar-mini-icon"><i class="fa fa-ellipsis-h"></i></span>
            <h4 class="text-section">Laravel Queries</h4>
          </li>
          <li class="nav-item" :class="{ active: $route.path === '/' }">
        `    <router-link to="/" exact-active-class="active">
              <i class="fas fa-layer-group"></i>
              <p>Insert Record</p>
            </router-link>
          </li>
          <li class="nav-item" :class="{ active: $route.path === '/getrecord' }">
            <router-link to="/getrecord" exact-active-class="active">
              <i class="fas fa-layer-group"></i>
              <p>Get Record</p>
            </router-link>
          </li>
          <li class="nav-item" :class="{ active: $route.path === '/editrecord' }">
            <router-link to="/editrecord" exact-active-class="active">
              <i class="fas fa-layer-group"></i>
              <p>Edit Record</p>
            </router-link>
          </li>
          <li class="nav-item" :class="{ active: $route.path === '/deleterecord' }">
            <router-link to="/deleterecord" exact-active-class="active">
              <i class="fas fa-layer-group"></i>
              <p>Delete Record</p>
            </router-link>
          </li>`
        </ul>
      </div>
    </div>
  </div>
</template>