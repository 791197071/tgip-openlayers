/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { fromEvent } from 'rxjs';
var FullScreenComponent = /** @class */ (function () {
    function FullScreenComponent() {
        this.defaultConfig = {
            // 样式名
            className: 'btn',
            // 全图按钮
            fullscreen: {
                on: './fullScreen-on.svg',
                off: './fullScreen-off.svg',
                icon: ''
            },
            // 控制显示位置，left top bottom right  //绝对定位
            position: {
                top: '10px',
                right: '10px'
            },
            // 每个图标大小
            size: {
                width: '50px',
                // 宽度100px
                height: '50px' // 高度 100px
            }
        };
        this.config = this.defaultConfig;
        // this.config.fullscreen.src = this.sanitizer.bypassSecurityTrustStyle(`url(\'${this.config.fullscreen.src}\')`)
    }
    Object.defineProperty(FullScreenComponent.prototype, "config", {
        get: /**
         * @return {?}
         */
        function () {
            return this._config;
        },
        /**
        * 样式参数
        * @param {any} config
        */
        set: /**
         * 样式参数
         * @param {?} value
         * @return {?}
         */
        function (value) {
            // 做处理
            this._config = Object.assign({}, this.defaultConfig, value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FullScreenComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.subscription = fromEvent(document, 'fullscreenchange').subscribe(function (event) {
            console.log(event);
            /** @type {?} */
            var isNotFullscreen = !document['fullscreenElement'] && // alternative standard method
                !document['mozFullScreenElement'] &&
                !document['webkitFullscreenElement'] &&
                !document['msFullscreenElement'];
            console.log(isNotFullscreen);
            if (isNotFullscreen) {
                _this.config.fullscreen.icon = "url('" + _this.config.fullscreen.on + "')";
            }
            else {
                _this.config.fullscreen.icon = "url('" + _this.config.fullscreen.off + "')";
            }
            console.log(_this.config.fullscreen.icon);
        });
        this.config.fullscreen.icon = "url('" + this.config.fullscreen.on + "')";
    };
    /**
     * @return {?}
     */
    FullScreenComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        // tslint:disable-next-line:no-unused-expression
        this.subscription && this.subscription.unsubscribe();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    FullScreenComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.config.icon = "url('" + this.config.fullscreen.src + "')";
    };
    /**
     * 是当前元素 全屏 还是document ele全屏？
     */
    /**
     * 是当前元素 全屏 还是document ele全屏？
     * @param {?=} elem
     * @return {?}
     */
    FullScreenComponent.prototype.fullscreenToggle = /**
     * 是当前元素 全屏 还是document ele全屏？
     * @param {?=} elem
     * @return {?}
     */
    function (elem) {
        if (elem === void 0) { elem = document.documentElement; }
        if (!document['fullscreenElement'] && // alternative standard method
            !document['mozFullScreenElement'] &&
            !document['webkitFullscreenElement'] &&
            !document['msFullscreenElement']) {
            // current working methods
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            }
            else if (elem.msRequestFullscreen) {
                elem.msRequestFullscreen();
            }
            else if (elem.mozRequestFullScreen) {
                elem.mozRequestFullScreen();
            }
            else if (elem.webkitRequestFullscreen) {
                elem.webkitRequestFullscreen(Element['ALLOW_KEYBOARD_INPUT']);
            }
        }
        else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
            else if (document['msExitFullscreen']) {
                document['msExitFullscreen']();
            }
            else if (document['mozCancelFullScreen']) {
                document['mozCancelFullScreen']();
            }
            else if (document['webkitExitFullscreen']) {
                document['webkitExitFullscreen']();
            }
        }
    };
    FullScreenComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'tgip-ol-full-screen',
                    template: "<button (click)=\"fullscreenToggle()\" \n[style.width]=\"config.size.width\" \n[style.height]=\"config.size.height\"\n[style.top]=\"config.position.top\"\n[style.right]=\"config.position.right\"\nstyle=\"position:absolute;\"\n[style.background]=\"config.fullscreen.icon\"\n[class]=\"config.className\"\n>\u5168\u5C4F</button>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    FullScreenComponent.ctorParameters = function () { return []; };
    FullScreenComponent.propDecorators = {
        configUrl: [{ type: Input }],
        config: [{ type: Input, args: ['config',] }]
    };
    return FullScreenComponent;
}());
export { FullScreenComponent };
if (false) {
    /** @type {?} */
    FullScreenComponent.prototype.configUrl;
    /**
     * @type {?}
     * @private
     */
    FullScreenComponent.prototype.subscription;
    /**
     * @type {?}
     * @private
     */
    FullScreenComponent.prototype._config;
    /**
     * @type {?}
     * @private
     */
    FullScreenComponent.prototype.defaultConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbC1zY3JlZW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGdpcC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2xzL2Z1bGwtc2NyZWVuL2Z1bGwtc2NyZWVuLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBSU4sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFFL0M7SUE0Q0U7UUFwQlEsa0JBQWEsR0FBRzs7WUFFdEIsU0FBUyxFQUFFLEtBQUs7O1lBRWhCLFVBQVUsRUFBRTtnQkFDVixFQUFFLEVBQUUscUJBQXFCO2dCQUN6QixHQUFHLEVBQUUsc0JBQXNCO2dCQUMzQixJQUFJLEVBQUUsRUFBRTthQUNUOztZQUVELFFBQVEsRUFBRTtnQkFDUixHQUFHLEVBQUUsTUFBTTtnQkFDWCxLQUFLLEVBQUUsTUFBTTthQUNkOztZQUVELElBQUksRUFBRTtnQkFDSixLQUFLLEVBQUUsTUFBTTs7Z0JBQ2IsTUFBTSxFQUFFLE1BQU0sQ0FBQyxXQUFXO2FBQzNCO1NBQ0YsQ0FBQztRQUVBLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUNqQyxpSEFBaUg7SUFDbkgsQ0FBQztJQW5DRCxzQkFBSSx1Q0FBTTs7OztRQUFWO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3RCLENBQUM7UUFDQTs7O1VBR0U7Ozs7OztRQUNILFVBQ1csS0FBVTtZQUNuQixNQUFNO1lBQ04sSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzlELENBQUM7OztPQVRBOzs7O0lBbUNELHNDQUFROzs7SUFBUjtRQUFBLGlCQXNCQztRQXJCQyxJQUFJLENBQUMsWUFBWSxH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LENBQUMsc0JBQXNCLENBQUMsRUFBRTtnQkFDM0MsUUFBUSxDQUFDLHNCQUFzQixDQUFDLEVBQUUsQ0FBQzthQUNwQztTQUNGO0lBQ0gsQ0FBQzs7Z0JBakhGLFNBQVMsU0FBQzs7b0JBRVQsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsbVZBQTJDOztpQkFFNUM7Ozs7OzRCQUdFLEtBQUs7eUJBV0wsS0FBSyxTQUFDLFFBQVE7O0lBK0ZqQiwwQkFBQztDQUFBLEFBbEhELElBa0hDO1NBNUdZLG1CQUFtQjs7O0lBRTlCLHdDQUEyQjs7Ozs7SUFFM0IsMkNBQW1DOzs7OztJQUNuQyxzQ0FBcUI7Ozs7O0lBYXJCLDRDQW1CRSIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIElucHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZyb21FdmVudCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAndGdpcC1vbC1mdWxsLXNjcmVlbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9mdWxsLXNjcmVlbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Z1bGwtc2NyZWVuLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGdWxsU2NyZWVuQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KCkgY29uZmlnVXJsOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBfY29uZmlnOiBhbnk7XG4gIGdldCBjb25maWcoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xuICB9XG4gICAvKipcbiAgICog5qC35byP5Y+C5pWwXG4gICAqIEBwYXJhbSB7YW55fSBjb25maWdcbiAgICovXG4gIEBJbnB1dCgnY29uZmlnJylcbiAgc2V0IGNvbmZpZyh2YWx1ZTogYW55KSB7XG4gICAgLy8g5YGa5aSE55CGXG4gICAgdGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kZWZhdWx0Q29uZmlnLCB2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBkZWZhdWx0Q29uZmlnID0ge1xuICAgIC8vIOagt+W8j+WQjVxuICAgIGNsYXNzTmFtZTogJ2J0bicsXG4gICAgLy8g5YWo5Zu+5oyJ6ZKuXG4gICAgZnVsbHNjcmVlbjoge1xuICAgICAgb246ICcuL2Z1bGxTY3JlZW4tb24uc3ZnJyxcbiAgICAgIG9mZjogJy4vZnVsbFNjcmVlbi1vZmYuc3ZnJyxcbiAgICAgIGljb246ICcnXG4gICAgfSxcbiAgICAvLyDmjqfliLbmmL7npLrkvY3nva7vvIxsZWZ0IHRvcCBib3R0b20gcmlnaHQgIC8v57ud5a+55a6a5L2NXG4gICAgcG9zaXRpb246IHtcbiAgICAgIHRvcDogJzEwcHgnLFxuICAgICAgcmlnaHQ6ICcxMHB4J1xuICAgIH0sXG4gICAgLy8g5q+P5Liq5Zu+5qCH5aSn5bCPXG4gICAgc2l6ZToge1xuICAgICAgd2lkdGg6ICc1MHB4JywgLy8g5a695bqmMTAwcHhcbiAgICAgIGhlaWdodDogJzUwcHgnIC8vIOmrmOW6piAxMDBweFxuICAgIH1cbiAgfTtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jb25maWcgPSB0aGlzLmRlZmF1bHRDb25maWc7XG4gICAgLy8gdGhpcy5jb25maWcuZnVsbHNjcmVlbi5zcmMgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoYHVybChcXCcke3RoaXMuY29uZmlnLmZ1bGxzY3JlZW4uc3JjfVxcJylgKVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24gPSBmcm9tRXZlbnQoZG9jdW1lbnQsICdmdWxsc2NyZWVuY2hhbmdlJykuc3Vic2NyaWJlKFxuICAgICAgZXZlbnQgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gICAgICAgIGNvbnN0IGlzTm90RnVsbHNjcmVlbiA9XG4gICAgICAgICAgIWRvY3VtZW50WydmdWxsc2NyZWVuRWxlbWVudCddICYmIC8vIGFsdGVybmF0aXZlIHN0YW5kYXJkIG1ldGhvZFxuICAgICAgICAgICFkb2N1bWVudFsnbW96RnVsbFNjcmVlbkVsZW1lbnQnXSAmJlxuICAgICAgICAgICFkb2N1bWVudFsnd2Via2l0RnVsbHNjcmVlbkVsZW1lbnQnXSAmJlxuICAgICAgICAgICFkb2N1bWVudFsnbXNGdWxsc2NyZWVuRWxlbWVudCddO1xuICAgICAgICBjb25zb2xlLmxvZyhpc05vdEZ1bGxzY3JlZW4pO1xuXG4gICAgICAgIGlmIChpc05vdEZ1bGxzY3JlZW4pIHtcbiAgICAgICAgICB0aGlzLmNvbmZpZy5mdWxsc2NyZWVuLmljb24gPSBgdXJsKFxcJyR7dGhpcy5jb25maWcuZnVsbHNjcmVlbi5vbn1cXCcpYDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmNvbmZpZy5mdWxsc2NyZWVuLmljb24gPSBgdXJsKFxcJyR7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5mdWxsc2NyZWVuLm9mZlxuICAgICAgICAgIH1cXCcpYDtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNvbmZpZy5mdWxsc2NyZWVuLmljb24pO1xuICAgICAgfVxuICAgICk7XG4gICAgdGhpcy5jb25maWcuZnVsbHNjcmVlbi5pY29uID0gYHVybChcXCcke3RoaXMuY29uZmlnLmZ1bGxzY3JlZW4ub259XFwnKWA7XG4gIH1cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXVudXNlZC1leHByZXNzaW9uXG4gICAgdGhpcy5zdWJzY3JpcHRpb24gJiYgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLmNvbmZpZy5pY29uID0gYHVybChcXCcke3RoaXMuY29uZmlnLmZ1bGxzY3JlZW4uc3JjfVxcJylgO1xuICB9XG5cbiAgLyoqXG4gICAqIOaYr+W9k+WJjeWFg+e0oCDlhajlsY8g6L+Y5pivZG9jdW1lbnQgZWxl5YWo5bGP77yfXG4gICAqL1xuICBwdWJsaWMgZnVsbHNjcmVlblRvZ2dsZShlbGVtOiBhbnkgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAoXG4gICAgICAhZG9jdW1lbnRbJ2Z1bGxzY3JlZW5FbGVtZW50J10gJiYgLy8gYWx0ZXJuYXRpdmUgc3RhbmRhcmQgbWV0aG9kXG4gICAgICAhZG9jdW1lbnRbJ21vekZ1bGxTY3JlZW5FbGVtZW50J10gJiZcbiAgICAgICFkb2N1bWVudFsnd2Via2l0RnVsbHNjcmVlbkVsZW1lbnQnXSAmJlxuICAgICAgIWRvY3VtZW50Wydtc0Z1bGxzY3JlZW5FbGVtZW50J11cbiAgICApIHtcbiAgICAgIC8vIGN1cnJlbnQgd29ya2luZyBtZXRob2RzXG5cbiAgICAgIGlmIChlbGVtLnJlcXVlc3RGdWxsc2NyZWVuKSB7XG4gICAgICAgIGVsZW0ucmVxdWVzdEZ1bGxzY3JlZW4oKTtcbiAgICAgIH0gZWxzZSBpZiAoZWxlbS5tc1JlcXVlc3RGdWxsc2NyZWVuKSB7XG4gICAgICAgIGVsZW0ubXNSZXF1ZXN0RnVsbHNjcmVlbigpO1xuICAgICAgfSBlbHNlIGlmIChlbGVtLm1velJlcXVlc3RGdWxsU2NyZWVuKSB7XG4gICAgICAgIGVsZW0ubW96UmVxdWVzdEZ1bGxTY3JlZW4oKTtcbiAgICAgIH0gZWxzZSBpZiAoZWxlbS53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbikge1xuICAgICAgICBlbGVtLndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKEVsZW1lbnRbJ0FMTE9XX0tFWUJPQVJEX0lOUFVUJ10pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4pIHtcbiAgICAgICAgZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4oKTtcbiAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnRbJ21zRXhpdEZ1bGxzY3JlZW4nXSkge1xuICAgICAgICBkb2N1bWVudFsnbXNFeGl0RnVsbHNjcmVlbiddKCk7XG4gICAgICB9IGVsc2UgaWYgKGRvY3VtZW50Wydtb3pDYW5jZWxGdWxsU2NyZWVuJ10pIHtcbiAgICAgICAgZG9jdW1lbnRbJ21vekNhbmNlbEZ1bGxTY3JlZW4nXSgpO1xuICAgICAgfSBlbHNlIGlmIChkb2N1bWVudFsnd2Via2l0RXhpdEZ1bGxzY3JlZW4nXSkge1xuICAgICAgICBkb2N1bWVudFsnd2Via2l0RXhpdEZ1bGxzY3JlZW4nXSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19