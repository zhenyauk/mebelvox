/*! OwlCarousel2Thumbs - v0.1.3 | (c) 2015 @gijsroge | MIT license | https://github.com/gijsroge/OwlCarousel2-Thumbs */
!function(a){"use strict";var b=function(c){this.owl=c,this._thumbcontent=[],this.owl_currentitem=this.owl.options.startPosition,this.$element=this.owl.$element,this._handlers={"prepared.owl.carousel":a.proxy(function(b){if(b.namespace&&this.owl._options.thumbs&&!this.owl._options.thumbImage)this._thumbcontent.push(a(b.content).find("[data-thumb]").attr("data-thumb"));else if(b.namespace&&this.owl._options.thumbs&&this.owl._options.thumbImage){var c=a(b.content).find("img");this._thumbcontent.push(c)}},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this.owl._options.thumbs&&(this.initialize(),this.currentslide(),this.draw())},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"===a.property.name&&this.owl._options.thumbs&&(this.currentslide(),this.draw())},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._initialized&&this.draw()},this)},this.owl._options=a.extend(b.Defaults,this.owl.options),this.owl.$element.on(this._handlers)};b.Defaults={thumbs:!0,thumbImage:!1,thumbContainerClass:"owl-thumbs",thumbItemClass:"owl-thumb-item"},b.prototype.currentslide=function(){this.owl_currentitem=this.owl._current-this.owl._clones.length/2,this.owl_currentitem===this.owl._items.length&&(this.owl_currentitem=0)},b.prototype.draw=function(){a(this._thumbcontent._thumbcontainer).children().filter(".active").removeClass("active"),a(this._thumbcontent._thumbcontainer).children().eq(this.owl_currentitem).addClass("active")},b.prototype.initialize=function(){var b=this.owl._options;this._thumbcontent._thumbcontainer=a("<div>").addClass(b.thumbContainerClass).appendTo(this.$element);var c;if(this.owl._options.thumbImage)for(c=0;c<this._thumbcontent.length;++c)this._thumbcontent._thumbcontainer.append("<button class="+b.thumbItemClass+'><img src="'+this._thumbcontent[c].attr("src")+'" alt="'+this._thumbcontent[c].attr("alt")+'" /></button>');else for(c=0;c<this._thumbcontent.length;++c)this._thumbcontent._thumbcontainer.append("<button class="+b.thumbItemClass+">"+this._thumbcontent[c]+"</button>");a(this._thumbcontent._thumbcontainer).on("click","button",a.proxy(function(c){var d=a(c.target).parent().is(this._thumbcontent._thumbcontainer)?a(c.target).index():a(c.target).parent().index();c.preventDefault(),this.owl.to(d,b.dotsSpeed)},this))},b.prototype.destroy=function(){var a,b;for(a in this._handlers)this.owl.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Thumbs=b}(window.Zepto||window.jQuery,window,document);