$(document).ready(function(){;(function(){let dot='<button type="button"><svg viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" class="dot"><circle cx="13" cy="13" r="4" class="dot__inside"/><circle cx="13" cy="13" r="12" class="dot__outline"/></svg></button>',risksBlock=document.querySelector('.risks-block'),blockThreeChildren=document.querySelector('.stages-block_three-children'),blockThreeChildrenChilds=document.querySelectorAll('.stages-block_three-children .card'),blockTwoChildren=document.querySelector('.stages-block_two-children'),blockTwoChildrenChilds=document.querySelectorAll('.stages-block_two-children .card'),blockFourChildren=document.querySelector('.stages-block_four-children'),blockFourChildrenChilds=document.querySelectorAll('.stages-block_four-children .card'),relatedSinglesBlock=document.querySelector('.related-singles'),indexServiceBlock=document.querySelector('.index-services-block'),indexServices=document.querySelectorAll('.index-service-card'),indexNewsBlock=document.querySelector('.index-news-sect__list'),indexNews=document.querySelectorAll('.index-news-sect__li');let services=document.querySelector('.services-block');if(services)services=services.querySelectorAll('.service-card');let buildIndexNewsSlider=function(){if(indexNewsBlock&&indexNews.length>2){if(matchMedia('(max-width: 767.98px)').matches){$(indexNewsBlock).slick({accessibility:!1,infinite:!1,arrows:!1,dots:!0,dotsClass:'index-services-block__dots dots',customPaging:function(){return dot}})}else{}}},buildStagesBlockSlider=function(selector,media,childs,numberChilds,responsiveArray){if(matchMedia(media).matches&&childs.length<numberChilds){if($(selector).hasClass('slick-slider')){$(selector).slick('unslick')}}else{if($(selector).hasClass('slick-slider')){return}
$(selector).slick({accessibility:!1,slidesToShow:1,slidesToScroll:1,infinite:!1,arrows:!1,dots:!0,dotsClass:'stages-block__dots dots',customPaging:function(){return dot},variableWidth:!0,centerMode:!0,centerPadding:'0',mobileFirst:!0,responsive:responsiveArray})}};if(indexNewsBlock){window.addEventListener('resize',buildIndexNewsSlider);buildIndexNewsSlider()}
buildRelatedSinglesSlider=function(){if(relatedSinglesBlock&&relatedSinglesBlock.children.length>2&&matchMedia('(max-width: 767.98px)').matches){console.log('msg');$('.related-singles').slick({accessibility:!1,slidesToShow:1,slidesToScroll:1,infinite:!1,arrows:!1,dots:!0,dotsClass:'related__dots dots',slide:'.single-card',centerMode:!0,centerPadding:'0px',variableWidth:!0,customPaging:function(){return dot}})}}
window.addEventListener('resize',function(){if(matchMedia('(min-width: 767.98px)').matches){if($('.related-singles').hasClass('slick-slider')){$('.related-singles').slick('unslick')}}});if(heroSlides&&heroSlides.length>1){let heroSect=$('.hero-sect');heroSect.on('init',function(){heroSect.addClass('delayed')});heroSect.slick({accessibility:!1,slidesToShow:1,slidesToScroll:1,infinite:!1,arrows:!1,dots:!0,slide:'.hero-sect__slide',dotsClass:'hero-sect__dots dots',customPaging:function(){return dot},swipeToSlide:!0,fade:!0,draggable:!1,speed:0,mobileFirst:!0});heroSect.on('beforeChange',function(event,slick,currentSlide,nextSlide){heroSect.toggleClass('toright',currentSlide<nextSlide).toggleClass('toleft',currentSlide>nextSlide).css('pointer-events','none')});heroSect.on('animationend',function(){let animName=event.animationName;if(animName==='translateToLeft'){heroSect.removeClass('toright')}else if(animName==='translateToRight'){heroSect.removeClass('toleft')}
heroSect.css('pointer-events','auto')})}
let buildServicesSlider=function(){if(matchMedia('(min-width: 1319.98px)').matches&&services.length<=4){if($('.services-block').hasClass('slick-slider')){$('.services-block').slick('unslick')}}else{if($('.services-block').hasClass('slick-slider')){return}
if(services.length>1){$('.services-block').slick({accessibility:!1,slidesToShow:1,slidesToScroll:1,infinite:!1,arrows:!1,dots:!0,initialSlide:0,dotsClass:'services-block__dots dots',customPaging:function(){return dot},mobileFirst:!0,variableWidth:!0,centerMode:!0,centerPadding:'0',responsive:[{breakpoint:575.98,settings:{slidesToShow:2,centerMode:!1}},{breakpoint:991.98,settings:{slidesToShow:3,centerMode:!1}},{breakpoint:1319.98,settings:{slidesToShow:4,centerMode:!1}}]})}}};if(servicesBlock){window.addEventListener('resize',buildServicesSlider);buildServicesSlider()}
if(page==='index.php'){$('.stages-block').slick({accessibility:!1,slidesToShow:1,slidesToScroll:1,infinite:!1,arrows:!1,dots:!0,dotsClass:'stages-block__dots dots',customPaging:function(){return dot},variableWidth:!0,centerMode:!0,centerPadding:'0',mobileFirst:!0,responsive:[{breakpoint:575.98,settings:{slidesToShow:2,centerMode:!1}},{breakpoint:767.98,settings:'unslick'}]})}
if(trustFeatures&&trustFeatures.length>1){$('.trust-sect > .features-block').slick({accessibility:!1,slidesToShow:1,slidesToScroll:1,infinite:!1,arrows:!1,dots:!0,dotsClass:'dots',mobileFirst:!0,variableWidth:!0,centerMode:!0,centerPadding:'0',responsive:[{breakpoint:575.98,settings:{slidesToShow:2,centerMode:!1}},{breakpoint:991.98,settings:{slidesToShow:3,centerMode:!1}},{breakpoint:1319.98,settings:{slidesToShow:4,centerMode:!1}}]})}
if(matchMedia('(min-width: 1319.98px)').matches){if(trustFeatures&&trustFeatures.length<5){$('.trust-sect > .features-block').slick('unslick')}}
let buildTwoChildrenSlider=function(){buildStagesBlockSlider('.stages-block_two-children','(min-width: 991.98px)',blockTwoChildrenChilds,3,[{breakpoint:991.98,settings:{slidesToShow:2,centerMode:!1,touchThreshold:8}}])};if(blockTwoChildren){window.addEventListener('resize',buildTwoChildrenSlider);buildTwoChildrenSlider()}
let buildThreeChildrenSlider=function(){buildStagesBlockSlider('.stages-block_three-children','(min-width: 1319.98px)',blockThreeChildrenChilds,4,[{breakpoint:767.98,settings:{slidesToShow:2,centerMode:!1,touchThreshold:8}},{breakpoint:1319.98,settings:{slidesToShow:3,centerMode:!1,touchThreshold:10}}])};if(blockThreeChildren){window.addEventListener('resize',buildThreeChildrenSlider);buildThreeChildrenSlider()}
let buildFourChildrenSlider=function(){buildStagesBlockSlider('.stages-block_four-children','(min-width: 1319.98px)',blockFourChildrenChilds,5,[{breakpoint:767.98,settings:{slidesToShow:2,centerMode:!1,touchThreshold:8}},{breakpoint:991.98,settings:{slidesToShow:3,centerMode:!1,touchThreshold:8}},{breakpoint:1319.98,settings:{slidesToShow:4,centerMode:!1,touchThreshold:10}}])};if(blockFourChildren){window.addEventListener('resize',buildFourChildrenSlider);buildFourChildrenSlider()}
$('.statistics-sect__slider').slick({slidesToShow:1,slidesToScroll:1,infinite:!1,arrows:!1,dots:!0,dotsClass:'statistics-sect__dots dots',customPaging:function(){return dot},variableWidth:!0,centerMode:!0,centerPadding:'0'});if(risksBlock){$('.risks-block').slick({accessibility:!1,slidesToScroll:1,slidesToShow:1,infinite:!1,arrows:!1,dots:!0,slide:'.risks-block .text-block',dotsClass:'risks-block__dots dots',customPaging:function(){return dot},mobileFirst:!0,responsive:[{breakpoint:575.98,settings:'unslick'}]})}
$('.slick-list.draggable').on('mousedown',function(){$(this).addClass('grabbing')});$('.slick-list.draggable').on('beforeChange',function(){$(this).removeClass('grabbing')});$(document).on('mouseup',function(){$('.slick-list.draggable').removeClass('grabbing')});const commonSlickOptions={arrows:!1,infinite:!1,slidesToShow:1,slidesToScroll:1,mobileFirst:!0,dots:!0,customPaging:function(){return dot},}
$('.testing-models__list').slick({...commonSlickOptions,dotsClass:'testing-models__dots dots',responsive:[{breakpoint:1023.98,settings:{slidesToShow:2,slidesToScroll:1,}},{breakpoint:1319.98,settings:'unslick'}]})
$('.intranet-pentest-stages__list').slick({...commonSlickOptions,dotsClass:'intranet-pentest-stages__dots dots',responsive:[{breakpoint:767.98,settings:'unslick'}]})
$('.webapp-analysis-stages__list').slick({...commonSlickOptions,dotsClass:'webapp-analysis-stages__dots dots',responsive:[{breakpoint:767.98,settings:'unslick'}]})
$('.wi-fi-pentest-stages__list').slick({...commonSlickOptions,dotsClass:'wi-fi-pentest-stages__dots dots',responsive:[{breakpoint:767.98,settings:'unslick'}]})
$('.social-pentest-stages__list').slick({...commonSlickOptions,dotsClass:'social-pentest-stages__dots dots',responsive:[{breakpoint:1023.98,settings:'unslick'}]})
$('.external-pentest-stages__list').slick({...commonSlickOptions,dotsClass:'external-pentest-stages__dots dots',responsive:[{breakpoint:767.98,settings:'unslick'}]})
$('.index-services-block').slick({...commonSlickOptions,dotsClass:'index-services-block__dots dots',responsive:[{breakpoint:767.98,settings:{slidesToShow:2,}},{breakpoint:1023.98,settings:'unslick'}]})
$('.commerc-secret__list').slick({...commonSlickOptions,dotsClass:'index-services-block__dots dots',responsive:[{breakpoint:767.98,settings:'unslick'}]})
$('.financial-orgz__list').slick({...commonSlickOptions,dotsClass:'index-services-block__dots dots',responsive:[{breakpoint:767.98,settings:'unslick'}]})
$('.tech-info-protection-stages__list').slick({...commonSlickOptions,dotsClass:'index-services-block__dots dots',responsive:[{breakpoint:767.98,settings:'unslick'}]})})();(function(){let thanksPopupTimer,callbackPopupTimer,thanksPopup=$('.thanks-popup'),callbackPopup=$('.callback-popup'),overlay=$('.overlay');closeThanksPopup=function(){thanksPopup.css('animation','fadeOut .5s');if(overlay.hasClass('active')&&!callbackPopup.hasClass('active')){overlay.css('animation','fadeOut .5s')}};$('form').each(function(){$(this).validate({rules:{'user-name':{required:!0,userName:!0,minlength:2},'user-tel':{required:!0,userPhone:!0},'user-email':{email:!0},'privacy-policy':{required:!0,minlength:1},'company-name':{minlength:2}},messages:{'user-name':{required:'Укажите имя',minlength:jQuery.validator.format('Имя не может быть таким коротким'),userName:'Допустимы только буквы'},'user-tel':{required:'Укажите телефон',userPhone:'Укажите верный номер телефона'},'user-email':{email:'Укажите верный E-mail'},'privacy-policy':{required:'Согласитель с политикой обработки персональных данных'},'company-name':{minlength:jQuery.validator.format('Название компании не может быть таким коротким')}},onfocusout:!1,errorClass:'invalid',submitHandler:function(form,event){event.preventDefault();thanksPopup.addClass('active');if(!overlay.hasClass('active')){overlay.addClass('active')}
thanksPopupTimer=setTimeout(function(){closeThanksPopup()},3000);callbackPopupTimer=setTimeout(function(){callbackPopup[0].close()},5000)}})});$('form .btn, form .submit').on('click',function(){if(!$(event.target).parents('form').valid()){event.preventDefault()}});thanksPopup.on('click',function(){closeThanksPopup();clearTimeout(thanksPopupTimer);clearTimeout(callbackPopupTimer)});$('.thanks-popup, .overlay').on('animationend',function(){if(event.animationName==='fadeOut'){$(this).removeClass('active');$(this).css('animation','')}})})();let commentForm=document.querySelector('#commentform');if(commentForm){commentForm.validate().destroy();commentForm.validate({messages:{author:{required:'Укажите имя или ник'},email:{required:'Укажите Email',email:'Укажите верный Email'},comment:{required:'Напишите комментарий'}},})}
$.validator.methods.userPhone=function(value,element){return/\+7\([0-9]{3}\)[0-9]{3}\-[0-9]{2}\-[0-9]{2}/.test(value)};$.validator.methods.userName=function(value,element){return/^[а-яёА-ЯЁa-zA-Z\s]+$/.test(value)};(function(){$(function(){});let style=document.createElement('style');style.textContent='#pxl_wrap{pointer-events:none;height: 697% !important;width: 100% !important;position: absolute !important;top: 0 !important;left: 0 !important;}#pxl_wrap .pxl_pic{position: absolute !important;width:100% !important;height: 100% !important;opacity: .2 !important;}#pxl_wrap .pxl_pic img{display: initial !important;}';body.appendChild(style)})()})