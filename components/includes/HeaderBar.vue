<template>
  <div class="headerbar has-background-light">
    <div class="container py-2">
      <nav class="level is-mobile has-background-light">
        <div class="level-left">
          <div class="level-item">
            <div>
              <a href="tel:+977 9813066081">
                <i class="las la-phone"></i> +977 80808080
              </a>
            </div>
          </div>
        </div>
        <div class="level-right">
          <div class="level-item">
            <div class="dropdown">
              <div class="dropdown-trigger">
                <a href="#" aria-haspopup="true" aria-controls="dropdown-menu">
                  <i class="las la-user"></i> MY ACCOUNT
                  <span class="icon is-small">
                    <i class="las la-angle-down"></i>
                  </span>
                </a>
              </div>
              <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content is-radiusless">
                  <a class="dropdown-item">Register</a>
                  <a href="#" class="dropdown-item">Login</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<style type="text/css" lang="scss">
.headerbar {
  border-bottom: #e3e3e3 2px solid;

  .container {
    i {
      font-size: 16px;
    }
    a {
      font-size: 13px;
      font-weight: 400;
      color: #363636;
      transition: color 150ms;
      &:hover {
        color: #f5cb25 !important;
        transition: color 300ms;
      }
    }

    .dropdown-menu {
      right: 0 !important;
      left: unset;
    }
  }
}

.dropdown-trigger:hover + .dropdown-menu {
  display: block;
}
.dropdown-menu:hover {
  display: block;
}

@media screen and(max-width: 1024px) {
  .container {
    padding-left: 16px;
    padding-right: 16px;
  }
}
</style>