<template>
  <div id="content">
    <transition name="opacity" mode="out-in">
      <div v-if="$route.hash == '#instaliran'" id="main" class="main-message">
        Proširenje je uspješno instalirano!
      </div>
      <div
        v-else-if="$route.hash == '#azuriran'"
        id="main"
        class="main-message"
      >
        Proširenje je ažurirano na najnoviju verziju {{ $lastVersion }}!
      </div>
      <div v-else id="main">
        <div id="downloads">
          <div class="download-item">
            <a
              href="https://chrome.google.com/webstore/detail/e-dnevnik-plus/bcnccmamhmcabokipgjechdeealcmdbe"
              target="_blank"
              class="card"
            >
              <img src="~@/assets/img/download-icon.png" />
              Preuzmi&nbsp;<em>proširenje</em>&nbsp;za učenike i roditelje
            </a>
            <a
              href="https://chrome.google.com/webstore/detail/e-dnevnik-plus/bcnccmamhmcabokipgjechdeealcmdbe/reviews"
              target="_blank"
              class="card"
            >
              <img src="~@/assets/img/review-icon.png" />
            </a>
            <a
              href="https://github.com/ChrisRoss5/e-Dnevnik-Plus"
              target="_blank"
              class="card"
            >
              <img src="~@/assets/img/code-icon.png" />
            </a>
          </div>
          <div class="download-item">
            <a
              href="https://chrome.google.com/webstore/detail/e-dnevnik-plus-za-nastavn/jefappmpehdgllijkjpekdmkbmbigbnl"
              target="_blank"
              class="card"
            >
              <img src="~@/assets/img/download-icon.png" />
              Preuzmi&nbsp;<em>proširenje</em>&nbsp;za nastavnike
            </a>
            <a
              href="https://chrome.google.com/webstore/detail/e-dnevnik-plus-za-nastavn/jefappmpehdgllijkjpekdmkbmbigbnl/reviews"
              target="_blank"
              class="card"
            >
              <img src="~@/assets/img/review-icon.png" />
            </a>
            <a
              href="https://github.com/ChrisRoss5/e-Dnevnik-Plus-za-nastavnike"
              target="_blank"
              class="card"
            >
              <img src="~@/assets/img/code-icon.png" />
            </a>
          </div>
        </div>
        <div id="browsers" class="card">
          <div style="padding-bottom: 10px">Kompatibilni preglednici:</div>
          <div id="browser-icons">
            <div class="flex-center">
              <img src="~@/assets/img/chrome-icon.png" />
              Chrome
            </div>
            <div class="flex-center">
              <img src="~@/assets/img/edge-icon.png" />
              Edge
            </div>
          </div>
        </div>
      </div>
    </transition>
    <div id="browser">
      <img src="~@/assets/img/browser.png" />
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  mounted() {
    if (this.$route.hash)
      setTimeout(() => this.$router.replace({ hash: "#jupiiiii" }), 6000);
  },
});
</script>

<style lang="scss" scoped>
#content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
}

em {
  display: contents;
}

.card {
  background: white;
  padding: 10px 20px;
  margin: 10px 0;
}

#main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  padding-bottom: 40px;

  img {
    margin-right: 15px;
  }
}

.download-item {
  display: flex;
  gap: 10px;

  .card {
    display: flex;
    align-items: center;
    transition: background-color 150ms;
    cursor: pointer;

    &:first-child {
      flex: 1;
    }

    &:not(:first-child) img {
      margin: 0 !important;
    }
  }
}

#browsers {
  margin-left: 40px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

#browser-icons {
  display: flex;

  div {
    margin: 10px 20px 0 0;
  }
}

#browser {
  position: relative;
  height: 462px;

  img {
    position: absolute;
    height: 462px;
    transform: translateX(-1720px);
    border: 1px solid rgba(119, 119, 119, 0.507);
    box-shadow: 3px 2px 13px 4px rgba(204, 204, 204, 0.5);
  }
}

@media only screen and (max-width: 768px) {
  #browsers {
    margin: 15px 0 0 0 !important;
    align-items: center;
  }

  #downloads,
  #browsers {
    width: 100%;
  }

  .card {
    padding: 10px 10px;
  }

  #browser {
    height: 231px;
    width: 100%;

    img {
      right: 0;
      transform: scale(0.5);
      transform-origin: top right;
    }
  }
}

.main-message {
  font-size: 40px;
  color: #68af68;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 100%;
    bottom: 0;
    height: 5px;
    background: #68af68;
    animation: reveal 5s forwards 1s;
  }
}

@keyframes reveal {
  to {
    right: 0;
  }
}
</style>
