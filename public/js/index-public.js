 //   参数（tab单项选择器，当前项添加的类名,tab控制的等级元素选择器(即元素不相邻),isSiblings判断是否是相邻元素
 function tabmenuShow(tabitemSelStr, activeClass, tabsonitemSelStr,isSiblings) {

     if(!isSiblings){
        $(tabitemSelStr).on("click", function() {
         $(tabitemSelStr).removeClass(activeClass);
         $(this).addClass(activeClass);

         //控制内容区域的显示隐藏
         $(tabsonitemSelStr).hide();
         $(tabsonitemSelStr).eq($(this).index()).show();

     })

     }else{
        $(tabitemSelStr).on("click", function() {
            $(this).addClass(activeClass)
            $(this).siblings().removeClass(activeClass);
        })
     }
     


 }
 $(function() {
     /***** 公用组件部分js开始 *******/
     tabmenuShow('.tabMenu-one li', 'current');
     tabmenuShow('.tabMenu-two li', 'current');
     tabmenuShow('.tabMenu-two-sm li', 'current','',true);
     tabmenuShow('.slide-circle li', 'current','',true);
     tabmenuShow('.tabMenu-three li', 'current');
     tabmenuShow('.tabMenu-four li', 'current', '.tabCon');
     tabmenuShow('.tabMenu-five li', 'current');
     //tabMenu-five的可删除标签功能
     $('.tabMenu-five li i.x-icon').click(function() {
             $(this).parents('li:first').remove();
         })
         //嵌入提示 删除功能
     $('.en-prompt-warn .x-icon-l, .en-prompt-success .x-icon-l, .en-prompt-error .x-icon-l, .en-prompt-sweet .x-icon-l').click(function() {
             $(this).parent().remove();
         })
         /***** 公用组件部分js结束 *******/


     //首页左侧目录
     $('.side-menu .side-menu-con-tit').on('click', function() {
         $(this).next().slideToggle();
         $(this).find('i').toggleClass('arrow-down');
     })
     $('.en-main .side-menu .side-menu-con li').on('click', function() {
         $(this).addClass('current bd-l-main-5px');
         $(this).siblings().removeClass('current bd-l-main-5px').parents('dd:first').siblings().find('li').removeClass('current bd-l-main-5px');
     })
 })
