montageDefine("194adac","ui/list.reel/list",{dependencies:["matte/ui/list.reel"],factory:function(e,t){var n=e("matte/ui/list.reel").List;t.List=n.specialize({constructor:{value:function n(){this.super()}},templateDidLoad:{value:function(){this._repetition=this.templateObjects.repetition}},enterDocument:{value:function(e){e&&this.element.addEventListener("touchstart",this,!1)}},handleTouchstart:{value:function(){var e=this.element,t=e.scrollTop;0>=t&&(e.scrollTop=1),t+e.offsetHeight>=e.scrollHeight&&(e.scrollTop=e.scrollHeight-e.offsetHeight-1)}}})}});