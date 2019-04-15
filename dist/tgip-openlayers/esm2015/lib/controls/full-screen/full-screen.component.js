/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { fromEvent } from 'rxjs';
export class FullScreenComponent {
    constructor() {
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
    /**
     * @return {?}
     */
    get config() {
        return this._config;
    }
    /**
     * 样式参数
     * @param {?} value
     * @return {?}
     */
    set config(value) {
        // 做处理
        this._config = Object.assign({}, this.defaultConfig, value);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.subscription = fromEvent(document, 'fullscreenchange').subscribe(event => {
            console.log(event);
            /** @type {?} */
            const isNotFullscreen = !document['fullscreenElement'] && // alternative standard method
                !document['mozFullScreenElement'] &&
                !document['webkitFullscreenElement'] &&
                !document['msFullscreenElement'];
            console.log(isNotFullscreen);
            if (isNotFullscreen) {
                this.config.fullscreen.icon = `url(\'${this.config.fullscreen.on}\')`;
            }
            else {
                this.config.fullscreen.icon = `url(\'${this.config.fullscreen.off}\')`;
            }
            console.log(this.config.fullscreen.icon);
        });
        this.config.fullscreen.icon = `url(\'${this.config.fullscreen.on}\')`;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // tslint:disable-next-line:no-unused-expression
        this.subscription && this.subscription.unsubscribe();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.config.icon = `url(\'${this.config.fullscreen.src}\')`;
    }
    /**
     * 是当前元素 全屏 还是document ele全屏？
     * @param {?=} elem
     * @return {?}
     */
    fullscreenToggle(elem = document.documentElement) {
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
    }
}
FullScreenComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'tgip-ol-full-screen',
                template: "<button (click)=\"fullscreenToggle()\" \n[style.width]=\"config.size.width\" \n[style.height]=\"config.size.height\"\n[style.top]=\"config.position.top\"\n[style.right]=\"config.position.right\"\nstyle=\"position:absolute;\"\n[style.background]=\"config.fullscreen.icon\"\n[class]=\"config.className\"\n>\u5168\u5C4F</button>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
FullScreenComponent.ctorParameters = () => [];
FullScreenComponent.propDecorators = {
    configUrl: [{ type: Input }],
    config: [{ type: Input, args: ['config',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbC1zY3JlZW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGdpcC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2xzL2Z1bGwtc2NyZWVuL2Z1bGwtc2NyZWVuLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBSU4sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFRL0MsTUFBTSxPQUFPLG1CQUFtQjtJQXNDOUI7UUFwQlEsa0JBQWEsR0FBRzs7WUFFdEIsU0FBUyxFQUFFLEtBQUs7O1lBRWhCLFVBQVUsRUFBRTtnQkFDVixFQUFFLEVBQUUscUJBQXFCO2dCQUN6QixHQUFHLEVBQUUsc0JBQXNCO2dCQUMzQixJQUFJLEVBQUUsRUFBRTthQUNUOztZQUVELFFBQVEsRUFBRTtnQkFDUixHQUFHLEVBQUUsTUFBTTtnQkFDWCxLQUFLLEVBQUUsTUFBTTthQUNkOztZQUVELElBQUksRUFBRTtnQkFDSixLQUFLLEVBQUUsTUFBTTs7Z0JBQ2IsTUFBTSxFQUFFLE1BQU0sQ0FBQyxXQUFXO2FBQzNCO1NBQ0YsQ0FBQztRQUVBLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUNqQyxpSEFBaUg7SUFDbkgsQ0FBQzs7OztJQW5DRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQzs7Ozs7O0lBS0QsSUFDSSxNQUFNLENBQUMsS0FBVTtRQUNuQixNQUFNO1FBQ04sSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzlELENBQUM7Ozs7SUEwQkQsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDLFFBQVEs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SCxDQUFDOzs7WUFqSEYsU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixtVkFBMkM7O2FBRTVDOzs7Ozt3QkFHRSxLQUFLO3FCQVdMLEtBQUssU0FBQyxRQUFROzs7O0lBWGYsd0NBQTJCOzs7OztJQUUzQiwyQ0FBbUM7Ozs7O0lBQ25DLHNDQUFxQjs7Ozs7SUFhckIsNENBbUJFIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgSW5wdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25DaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICd0Z2lwLW9sLWZ1bGwtc2NyZWVuJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Z1bGwtc2NyZWVuLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZnVsbC1zY3JlZW4uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEZ1bGxTY3JlZW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcblxuICBASW5wdXQoKSBjb25maWdVcmw6IHN0cmluZztcblxuICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIF9jb25maWc6IGFueTtcbiAgZ2V0IGNvbmZpZygpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9jb25maWc7XG4gIH1cbiAgIC8qKlxuICAgKiDmoLflvI/lj4LmlbBcbiAgICogQHBhcmFtIHthbnl9IGNvbmZpZ1xuICAgKi9cbiAgQElucHV0KCdjb25maWcnKVxuICBzZXQgY29uZmlnKHZhbHVlOiBhbnkpIHtcbiAgICAvLyDlgZrlpITnkIZcbiAgICB0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRDb25maWcsIHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIGRlZmF1bHRDb25maWcgPSB7XG4gICAgLy8g5qC35byP5ZCNXG4gICAgY2xhc3NOYW1lOiAnYnRuJyxcbiAgICAvLyDlhajlm77mjInpkq5cbiAgICBmdWxsc2NyZWVuOiB7XG4gICAgICBvbjogJy4vZnVsbFNjcmVlbi1vbi5zdmcnLFxuICAgICAgb2ZmOiAnLi9mdWxsU2NyZWVuLW9mZi5zdmcnLFxuICAgICAgaWNvbjogJydcbiAgICB9LFxuICAgIC8vIOaOp+WItuaYvuekuuS9jee9ru+8jGxlZnQgdG9wIGJvdHRvbSByaWdodCAgLy/nu53lr7nlrprkvY1cbiAgICBwb3NpdGlvbjoge1xuICAgICAgdG9wOiAnMTBweCcsXG4gICAgICByaWdodDogJzEwcHgnXG4gICAgfSxcbiAgICAvLyDmr4/kuKrlm77moIflpKflsI9cbiAgICBzaXplOiB7XG4gICAgICB3aWR0aDogJzUwcHgnLCAvLyDlrr3luqYxMDBweFxuICAgICAgaGVpZ2h0OiAnNTBweCcgLy8g6auY5bqmIDEwMHB4XG4gICAgfVxuICB9O1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNvbmZpZyA9IHRoaXMuZGVmYXVsdENvbmZpZztcbiAgICAvLyB0aGlzLmNvbmZpZy5mdWxsc2NyZWVuLnNyYyA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZShgdXJsKFxcJyR7dGhpcy5jb25maWcuZnVsbHNjcmVlbi5zcmN9XFwnKWApXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IGZyb21FdmVudChkb2N1bWVudCwgJ2Z1bGxzY3JlZW5jaGFuZ2UnKS5zdWJzY3JpYmUoXG4gICAgICBldmVudCA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgICAgICAgY29uc3QgaXNOb3RGdWxsc2NyZWVuID1cbiAgICAgICAgICAhZG9jdW1lbnRbJ2Z1bGxzY3JlZW5FbGVtZW50J10gJiYgLy8gYWx0ZXJuYXRpdmUgc3RhbmRhcmQgbWV0aG9kXG4gICAgICAgICAgIWRvY3VtZW50Wydtb3pGdWxsU2NyZWVuRWxlbWVudCddICYmXG4gICAgICAgICAgIWRvY3VtZW50Wyd3ZWJraXRGdWxsc2NyZWVuRWxlbWVudCddICYmXG4gICAgICAgICAgIWRvY3VtZW50Wydtc0Z1bGxzY3JlZW5FbGVtZW50J107XG4gICAgICAgIGNvbnNvbGUubG9nKGlzTm90RnVsbHNjcmVlbik7XG5cbiAgICAgICAgaWYgKGlzTm90RnVsbHNjcmVlbikge1xuICAgICAgICAgIHRoaXMuY29uZmlnLmZ1bGxzY3JlZW4uaWNvbiA9IGB1cmwoXFwnJHt0aGlzLmNvbmZpZy5mdWxsc2NyZWVuLm9ufVxcJylgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY29uZmlnLmZ1bGxzY3JlZW4uaWNvbiA9IGB1cmwoXFwnJHtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLmZ1bGxzY3JlZW4ub2ZmXG4gICAgICAgICAgfVxcJylgO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29uZmlnLmZ1bGxzY3JlZW4uaWNvbik7XG4gICAgICB9XG4gICAgKTtcbiAgICB0aGlzLmNvbmZpZy5mdWxsc2NyZWVuLmljb24gPSBgdXJsKFxcJyR7dGhpcy5jb25maWcuZnVsbHNjcmVlbi5vbn1cXCcpYDtcbiAgfVxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tdW51c2VkLWV4cHJlc3Npb25cbiAgICB0aGlzLnN1YnNjcmlwdGlvbiAmJiB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMuY29uZmlnLmljb24gPSBgdXJsKFxcJyR7dGhpcy5jb25maWcuZnVsbHNjcmVlbi5zcmN9XFwnKWA7XG4gIH1cblxuICAvKipcbiAgICog5piv5b2T5YmN5YWD57SgIOWFqOWxjyDov5jmmK9kb2N1bWVudCBlbGXlhajlsY/vvJ9cbiAgICovXG4gIHB1YmxpYyBmdWxsc2NyZWVuVG9nZ2xlKGVsZW06IGFueSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCk6IHZvaWQge1xuICAgIGlmIChcbiAgICAgICFkb2N1bWVudFsnZnVsbHNjcmVlbkVsZW1lbnQnXSAmJiAvLyBhbHRlcm5hdGl2ZSBzdGFuZGFyZCBtZXRob2RcbiAgICAgICFkb2N1bWVudFsnbW96RnVsbFNjcmVlbkVsZW1lbnQnXSAmJlxuICAgICAgIWRvY3VtZW50Wyd3ZWJraXRGdWxsc2NyZWVuRWxlbWVudCddICYmXG4gICAgICAhZG9jdW1lbnRbJ21zRnVsbHNjcmVlbkVsZW1lbnQnXVxuICAgICkge1xuICAgICAgLy8gY3VycmVudCB3b3JraW5nIG1ldGhvZHNcblxuICAgICAgaWYgKGVsZW0ucmVxdWVzdEZ1bGxzY3JlZW4pIHtcbiAgICAgICAgZWxlbS5yZXF1ZXN0RnVsbHNjcmVlbigpO1xuICAgICAgfSBlbHNlIGlmIChlbGVtLm1zUmVxdWVzdEZ1bGxzY3JlZW4pIHtcbiAgICAgICAgZWxlbS5tc1JlcXVlc3RGdWxsc2NyZWVuKCk7XG4gICAgICB9IGVsc2UgaWYgKGVsZW0ubW96UmVxdWVzdEZ1bGxTY3JlZW4pIHtcbiAgICAgICAgZWxlbS5tb3pSZXF1ZXN0RnVsbFNjcmVlbigpO1xuICAgICAgfSBlbHNlIGlmIChlbGVtLndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKSB7XG4gICAgICAgIGVsZW0ud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4oRWxlbWVudFsnQUxMT1dfS0VZQk9BUkRfSU5QVVQnXSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChkb2N1bWVudC5leGl0RnVsbHNjcmVlbikge1xuICAgICAgICBkb2N1bWVudC5leGl0RnVsbHNjcmVlbigpO1xuICAgICAgfSBlbHNlIGlmIChkb2N1bWVudFsnbXNFeGl0RnVsbHNjcmVlbiddKSB7XG4gICAgICAgIGRvY3VtZW50Wydtc0V4aXRGdWxsc2NyZWVuJ10oKTtcbiAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnRbJ21vekNhbmNlbEZ1bGxTY3JlZW4nXSkge1xuICAgICAgICBkb2N1bWVudFsnbW96Q2FuY2VsRnVsbFNjcmVlbiddKCk7XG4gICAgICB9IGVsc2UgaWYgKGRvY3VtZW50Wyd3ZWJraXRFeGl0RnVsbHNjcmVlbiddKSB7XG4gICAgICAgIGRvY3VtZW50Wyd3ZWJraXRFeGl0RnVsbHNjcmVlbiddKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=