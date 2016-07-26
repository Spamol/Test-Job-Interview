'use strict';

var kodixApp = (function($) {
  var
      // Рабочие переменные
      app,
      self,
      // мобильное меню
      btnMobiMenu,
      openMobiMenu,
      topMenu,
      // верхние меню
      openMenu;

  app = {
    // Инициалицация модуля
    init: function() {
      self = app;
      btnMobiMenu = $('.mobi-menu').children();
      topMenu = $('.top-menu');
      self.events();
    },

    // События модуля
    events: function() {
      // Открытие/закрытие меню
      btnMobiMenu.on('click', self.openMobiMenu);
      // Подменю
      topMenu.children('li').children('a').on('click', self.openMenu);
      $(document).on('click', function(){
        topMenu.children('li').children('a.podmenu').removeClass('open').children().removeClass().addClass('icon-up-open');
        topMenu.children('li').children('a.podmenu').parent().children('ul').slideUp();
      });
    },

    // Функция открытия/закрытия меню
    openMobiMenu: function() {
      if($(this).hasClass('open')){
        $(this).removeClass('open');
        topMenu.slideUp();
      }else{
        $(this).addClass('open');
        topMenu.slideDown();
      }
      return false;
    },

    // Функция открытия подменю
    openMenu: function() {
      if($(this).hasClass('open')){
        $(this).removeClass('open').children().removeClass().addClass('icon-up-open');
        $(this).parent().children('ul').slideUp();
      }else{
        $(this).addClass('open').children().removeClass().addClass('icon-down-open');
        $(this).parent().children('ul').slideDown();
      }
      return false;
    }
  };
  return app;
}(jQuery));
// Инициализируем модуль
kodixApp.init();