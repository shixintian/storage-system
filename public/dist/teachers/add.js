define("/dist/teachers/add",["jquery","validate","form","datepicker","language"],function(e,a,s){var r=e("jquery");e("validate"),e("form"),e("datepicker"),e("language"),r("#addTeacher").validate({onKeyup:!0,sendForm:!1,eachInvalidField:function(){r(this).parents(".form-group").removeClass("has-success").addClass("has-error"),r(this).next().removeClass("glyphicon-ok").addClass("glyphicon-remove")},eachValidField:function(){r(this).parents(".form-group").addClass("has-success").removeClass("has-error"),r(this).next().addClass("glyphicon-ok").removeClass("glyphicon-remove")},valid:function(){var e=r(this).attr("action").trim();r(this).ajaxSubmit({url:e,type:"post",success:function(e){alert(e.msg),1e4==e.code&&location.reload()}})}})});