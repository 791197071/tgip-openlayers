/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class SwitcherMapComponent {
    constructor() {
        /**
         * 输出参数
         */
        this.outer = new EventEmitter();
        this.defaultConfig = {
            backgroundSize: {
                backgroundSize: '100% 100%'
            },
            selectFontBgColor: {
                bg: '#3385FF',
                border: '1px solid #3385FF'
            },
            unselectFontBgColor: {
                bg: 'none',
                border: '1px solid'
            },
            size: {
                width: 'auto',
                // 总宽度
                height: '100px',
                // 总高度
                background: '#fff'
            },
            imgSize: {
                width: '80px',
                // 总宽度
                height: '80px' // 总高度
            },
            position: {
                top: '0px',
                bottom: '100px',
                right: '0px'
            },
            fontStyle: {
                bottom: '0',
                right: '0',
                color: '#fff',
                fontSize: '12px'
            },
            baseMap: [
                {
                    src: 'url(assets/map.png)',
                    title: '地图',
                    visible: false,
                    isdisplay: true,
                    layer: {}
                },
                {
                    src: 'url(assets/map.png)',
                    title: '地球',
                    visible: false,
                    isdisplay: true,
                    layer: {}
                },
                {
                    src: 'url(assets/map.png)',
                    title: '全景',
                    visible: false,
                    isdisplay: true,
                    layer: {}
                },
                {
                    src: 'url(assets/map.png)',
                    title: '卫星',
                    visible: false,
                    isdisplay: true,
                    layer: {}
                }
            ]
        };
        this.config = this.defaultConfig;
    }
    /**
     * @return {?}
     */
    get config() {
        return this._config;
    }
    /**
     * 图层样式参数
     * \@example
     * {
     * backgroundSize: {
     * backgroundSize:  100% 100%,
     * },
     * selectFontBgColor: {
     * bg:  #3385FF ,
     * border:  1px solid #3385FF,
     * },
     * unselectFontBgColor: {
     * bg:  none ,
     * border:  1px solid,
     * },
     * size: {
     * width:  auto , // 总宽度
     * height:  100px , // 总高度
     * background:  #fff,
     * },
     * imgSize: {
     * width:  80px , // 总宽度
     * height:  80px  // 总高度
     * },
     * position: {
     * top:  0px ,
     * bottom:  100px ,
     * right:  0px,
     * },
     * fontStyle: {
     * bottom:  0 ,
     * right:  0 ,
     * color:  #fff ,
     * fontSize:  12px,
     * },
     * baseMap: [
     * {
     * src:  url(assets/map.png) ,
     * title:  地图 ,
     * visible: false,
     * isdisplay: true,
     * layer: {}
     * },
     * {
     * src:  url(assets/map.png) ,
     * title:  地球 ,
     * visible: false,
     * isdisplay: true,
     * layer: {}
     * },
     * {
     * src:  url(assets/map.png) ,
     * title:  全景 ,
     * visible: false,
     * isdisplay: true,
     * layer: {}
     * },
     * {
     * src:  url(assets/map.png) ,
     * title:  卫星 ,
     * visible: false,
     * isdisplay: true,
     * layer: {}
     * }
     * ]
     * };
     * @param {?} value
     * @return {?}
     */
    set config(value) {
        // 做处理
        this._config = Object.assign({}, this.defaultConfig, value);
        // this._config = DefaultOptionsUtil.preProcOptions(this.defaultConfig, value);
        // this._config = value;
    }
    // 点击选中
    /**
     * @param {?} item
     * @return {?}
     */
    fullscreenToggle(item) {
        this.outer.emit(item);
        this.flag = true;
        this.config.baseMap.forEach((value) => {
            if (value.title === item.title) {
                value.visible = true;
            }
            else {
                value.visible = false;
            }
        });
    }
    // 鼠标移入
    /**
     * @return {?}
     */
    mouseenter() {
        this.config.baseMap.forEach((value) => {
            value.isdisplay = true;
        });
    }
    // 鼠标移出
    /**
     * @return {?}
     */
    mouseleave() {
        if (this.flag) {
            this.config.baseMap.forEach((value) => {
                if (value.visible === true) {
                    value.isdisplay = true;
                }
                else {
                    value.isdisplay = false;
                }
            });
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
SwitcherMapComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'tgip-ol-switcher-map',
                template: "<div\n  id=\"mapType-wrapper\"\n  style=\"position:absolute; z-index: 1;\"\n  [style.bottom]=\"config.position.bottom\"\n  [style.right]=\"config.position.right\"\n>\n  <div\n    [style.width]=\"config.size.width\"\n    [style.height]=\"config.size.height\"\n    [style.background]=\"config.size.background\"\n    (mouseenter)=\"mouseenter()\"\n    (mouseleave)=\"mouseleave()\"\n  >\n    <div\n      [style.background]=\"item.src\"\n      [style.background-size]=\"config.backgroundSize.backgroundSize\"\n      style=\"float:left;background-size: 100% 100%; margin: 10px 10px; position: relative;border: 1px solid;\"\n      *ngFor=\"let item of config.baseMap; let i = index\"\n      [style.width]=\"config.imgSize.width\"\n      [ngStyle]=\"{\n        border:\n          item.visible === false\n            ? config.unselectFontBgColor.border\n            : config.selectFontBgColor.border,\n        display: item.isdisplay === true ? 'block' : 'none'\n      }\"\n      (click)=\"fullscreenToggle(item)\"\n      [style.height]=\"config.imgSize.height\"\n    >\n      <span\n        style=\"position: absolute;\n      display: inline-block;\n      padding: 3px 3px 2px 4px;   \n      border-top-left-radius: 2px;\"\n        [style.bottom]=\"config.fontStyle.bottom\"\n        [style.right]=\"config.fontStyle.right\"\n        [style.color]=\"config.fontStyle.color\"\n        [style.font-size]=\"config.fontStyle.fontSize\"\n        [ngStyle]=\"{\n          background:\n            item.visible === false\n              ? config.unselectFontBgColor.bg\n              : config.selectFontBgColor.bg\n        }\"\n      >\n        {{ item.title }}</span\n      >\n    </div>\n  </div>\n</div>\n",
                styles: ["#mapType-wrapper{position:absolute;bottom:100px;right:0;z-index:1}#mapType{height:100px;width:auto;cursor:pointer;background-color:red}#mapType .mapTypeCard{height:60px;width:86px;position:absolute;border-radius:2px;top:10px;box-sizing:border-box;border:1px solid rgba(153,153,153,.42);background:url(//webmap1.bdimg.com/wolfman/static/common/images/new/shadow_6bf0ecd.png) 0 0/86px 240px no-repeat}#mapType .mapTypeCard.active,#mapType .mapTypeCard:hover{border:1px solid #3385ff}#mapType .mapTypeCard.active span,#mapType .mapTypeCard:hover span{background-color:#3385ff}#mapType .switch-box{visibility:hidden;position:absolute;width:100%;height:20px;line-height:22px;color:#fff;background:rgba(0,0,0,.5)}#mapType .normal .switch-box p{margin-left:20px}#mapType .switch-box p{display:inline-block;margin-left:25px}#mapType .mapTypeCard span{position:absolute;bottom:0;right:0;display:inline-block;padding:3px 3px 2px 4px;font-size:12px;height:12px;line-height:12px;color:#fff;border-top-left-radius:2px}#mapType .mapTypeCard{background-image:url(//webmap1.bdimg.com/wolfman/static/common/images/new/maptype_8a68f95.png)}#mapType .normal{z-index:1;background-position:0 0;right:202px}#mapType .earth{background-position:0 -181px;right:106px}#mapType .panorama{z-index:3;right:10px;background-image:url(//webmap1.bdimg.com/wolfman/static/common/images/new/maptype_8a68f95.png);background-position:0 -121px;border-left:1px solid rgba(153,153,153,.6)}"]
            }] }
];
/** @nocollapse */
SwitcherMapComponent.ctorParameters = () => [];
SwitcherMapComponent.propDecorators = {
    outer: [{ type: Output }],
    config: [{ type: Input, args: ['config',] }]
};
if (false) {
    /**
     * 输出参数
     * @type {?}
     * @private
     */
    SwitcherMapComponent.prototype.outer;
    /** @type {?} */
    SwitcherMapComponent.prototype.flag;
    /**
     * @type {?}
     * @private
     */
    SwitcherMapComponent.prototype._config;
    /**
     * @type {?}
     * @private
     */
    SwitcherMapComponent.prototype.defaultConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpdGNoZXItbWFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RnaXAtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9scy9zd2l0Y2hlci1tYXAvc3dpdGNoZXItbWFwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVEvRSxNQUFNLE9BQU8sb0JBQW9CO0lBTy9COzs7O1FBRmtCLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBc0YxQyxrQkFBYSxHQUFHO1lBQ3RCLGNBQWMsRUFBRTtnQkFDZCxjQUFjLEVBQUUsV0FBVzthQUM1QjtZQUNELGlCQUFpQixFQUFFO2dCQUNqQixFQUFFLEVBQUUsU0FBUztnQkFDYixNQUFNLEVBQUUsbUJBQW1CO2FBQzVCO1lBQ0QsbUJBQW1CLEVBQUU7Z0JBQ25CLEVBQUUsRUFBRSxNQUFNO2dCQUNWLE1BQU0sRUFBRSxXQUFXO2FBQ3BCO1lBQ0QsSUFBSSxFQUFFO2dCQUNKLEtBQUssRUFBRSxNQUFNOztnQkFDYixNQUFNLEVBQUUsT0FBTzs7Z0JBQ2YsVUFBVSxFQUFFLE1BQU07YUFDbkI7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsS0FBSyxFQUFFLE1BQU07O2dCQUNiLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTTthQUN0QjtZQUNELFFBQVEsRUFBRTtnQkFDUixHQUFHLEVBQUUsS0FBSztnQkFDVixNQUFNLEVBQUUsT0FBTztnQkFDZixLQUFLLEVBQUUsS0FBSzthQUNiO1lBQ0QsU0FBUyxFQUFFO2dCQUNULE1BQU0sRUFBRSxHQUFHO2dCQUNYLEtBQUssRUFBRSxHQUFHO2dCQUNWLEtBQUssRUFBRSxNQUFNO2dCQUNiLFFBQVEsRUFBRSxNQUFNO2FBQ2pCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQO29CQUNFLEdBQUcsRUFBRSxxQkFB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ZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICd0Z2lwLW9sLXN3aXRjaGVyLW1hcCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zd2l0Y2hlci1tYXAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zd2l0Y2hlci1tYXAuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN3aXRjaGVyTWFwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLyoqXG4gICAqIOi+k+WHuuWPguaVsFxuICAgKiBAcGFyYW0ge2FueX0gb3V0ZXJcbiAgICovXG4gIEBPdXRwdXQoKSBwcml2YXRlIG91dGVyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIGZsYWc6IGJvb2xlYW47XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY29uZmlnID0gdGhpcy5kZWZhdWx0Q29uZmlnO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29uZmlnOiBhbnk7XG4gIGdldCBjb25maWcoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xuICB9XG4gIC8qKlxuICAgKiDlm77lsYLmoLflvI/lj4LmlbBcbiAgICogQHBhcmFtIHthbnl9IGNvbmZpZ1xuICAgKiBAZXhhbXBsZVxuICAgKiB7XG4gICAgYmFja2dyb3VuZFNpemU6IHtcbiAgICAgIGJhY2tncm91bmRTaXplOiAgMTAwJSAxMDAlLFxuICAgIH0sXG4gICAgc2VsZWN0Rm9udEJnQ29sb3I6IHtcbiAgICAgIGJnOiAgIzMzODVGRiAsXG4gICAgICBib3JkZXI6ICAxcHggc29saWQgIzMzODVGRixcbiAgICB9LFxuICAgIHVuc2VsZWN0Rm9udEJnQ29sb3I6IHtcbiAgICAgIGJnOiAgbm9uZSAsXG4gICAgICBib3JkZXI6ICAxcHggc29saWQsXG4gICAgfSxcbiAgICBzaXplOiB7XG4gICAgICB3aWR0aDogIGF1dG8gLCAvLyDmgLvlrr3luqZcbiAgICAgIGhlaWdodDogIDEwMHB4ICwgLy8g5oC76auY5bqmXG4gICAgICBiYWNrZ3JvdW5kOiAgI2ZmZixcbiAgICB9LFxuICAgIGltZ1NpemU6IHtcbiAgICAgIHdpZHRoOiAgODBweCAsIC8vIOaAu+WuveW6plxuICAgICAgaGVpZ2h0OiAgODBweCAgLy8g5oC76auY5bqmXG4gICAgfSxcbiAgICBwb3NpdGlvbjoge1xuICAgICAgdG9wOiAgMHB4ICxcbiAgICAgIGJvdHRvbTogIDEwMHB4ICxcbiAgICAgIHJpZ2h0OiAgMHB4LFxuICAgIH0sXG4gICAgZm9udFN0eWxlOiB7XG4gICAgICBib3R0b206ICAwICxcbiAgICAgIHJpZ2h0OiAgMCAsXG4gICAgICBjb2xvcjogICNmZmYgLFxuICAgICAgZm9udFNpemU6ICAxMnB4LFxuICAgIH0sXG4gICAgYmFzZU1hcDogW1xuICAgICAge1xuICAgICAgICBzcmM6ICB1cmwoYXNzZXRzL21hcC5wbmcpICxcbiAgICAgICAgdGl0bGU6ICDlnLDlm74gLFxuICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgaXNkaXNwbGF5OiB0cnVlLFxuICAgICAgICBsYXllcjoge31cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNyYzogIHVybChhc3NldHMvbWFwLnBuZykgLFxuICAgICAgICB0aXRsZTogIOWcsOeQgyAsXG4gICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICBpc2Rpc3BsYXk6IHRydWUsXG4gICAgICAgIGxheWVyOiB7fVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3JjOiAgdXJsKGFzc2V0cy9tYXAucG5nKSAsXG4gICAgICAgIHRpdGxlOiAg5YWo5pmvICxcbiAgICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgICAgIGlzZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgbGF5ZXI6IHt9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzcmM6ICB1cmwoYXNzZXRzL21hcC5wbmcpICxcbiAgICAgICAgdGl0bGU6ICDljavmmJ8gLFxuICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgaXNkaXNwbGF5OiB0cnVlLFxuICAgICAgICBsYXllcjoge31cbiAgICAgIH1cbiAgICBdXG4gIH07XG4gICAqL1xuICBASW5wdXQoJ2NvbmZpZycpXG4gIHNldCBjb25maWcodmFsdWU6IGFueSkge1xuICAgIC8vIOWBmuWkhOeQhlxuICAgIHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGVmYXVsdENvbmZpZywgdmFsdWUpO1xuICAgIC8vIHRoaXMuX2NvbmZpZyA9IERlZmF1bHRPcHRpb25zVXRpbC5wcmVQcm9jT3B0aW9ucyh0aGlzLmRlZmF1bHRDb25maWcsIHZhbHVlKTtcbiAgICAvLyB0aGlzLl9jb25maWcgPSB2YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgZGVmYXVsdENvbmZpZyA9IHtcbiAgICBiYWNrZ3JvdW5kU2l6ZToge1xuICAgICAgYmFja2dyb3VuZFNpemU6ICcxMDAlIDEwMCUnXG4gICAgfSxcbiAgICBzZWxlY3RGb250QmdDb2xvcjoge1xuICAgICAgYmc6ICcjMzM4NUZGJyxcbiAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjMzM4NUZGJ1xuICAgIH0sXG4gICAgdW5zZWxlY3RGb250QmdDb2xvcjoge1xuICAgICAgYmc6ICdub25lJyxcbiAgICAgIGJvcmRlcjogJzFweCBzb2xpZCdcbiAgICB9LFxuICAgIHNpemU6IHtcbiAgICAgIHdpZHRoOiAnYXV0bycsIC8vIOaAu+WuveW6plxuICAgICAgaGVpZ2h0OiAnMTAwcHgnLCAvLyDmgLvpq5jluqZcbiAgICAgIGJhY2tncm91bmQ6ICcjZmZmJ1xuICAgIH0sXG4gICAgaW1nU2l6ZToge1xuICAgICAgd2lkdGg6ICc4MHB4JywgLy8g5oC75a695bqmXG4gICAgICBoZWlnaHQ6ICc4MHB4JyAvLyDmgLvpq5jluqZcbiAgICB9LFxuICAgIHBvc2l0aW9uOiB7XG4gICAgICB0b3A6ICcwcHgnLFxuICAgICAgYm90dG9tOiAnMTAwcHgnLFxuICAgICAgcmlnaHQ6ICcwcHgnXG4gICAgfSxcbiAgICBmb250U3R5bGU6IHtcbiAgICAgIGJvdHRvbTogJzAnLFxuICAgICAgcmlnaHQ6ICcwJyxcbiAgICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgICBmb250U2l6ZTogJzEycHgnXG4gICAgfSxcbiAgICBiYXNlTWFwOiBbXG4gICAgICB7XG4gICAgICAgIHNyYzogJ3VybChhc3NldHMvbWFwLnBuZyknLFxuICAgICAgICB0aXRsZTogJ+WcsOWbvicsXG4gICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICBpc2Rpc3BsYXk6IHRydWUsXG4gICAgICAgIGxheWVyOiB7fVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3JjOiAndXJsKGFzc2V0cy9tYXAucG5nKScsXG4gICAgICAgIHRpdGxlOiAn5Zyw55CDJyxcbiAgICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgICAgIGlzZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgbGF5ZXI6IHt9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzcmM6ICd1cmwoYXNzZXRzL21hcC5wbmcpJyxcbiAgICAgICAgdGl0bGU6ICflhajmma8nLFxuICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgaXNkaXNwbGF5OiB0cnVlLFxuICAgICAgICBsYXllcjoge31cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNyYzogJ3VybChhc3NldHMvbWFwLnBuZyknLFxuICAgICAgICB0aXRsZTogJ+WNq+aYnycsXG4gICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICBpc2Rpc3BsYXk6IHRydWUsXG4gICAgICAgIGxheWVyOiB7fVxuICAgICAgfVxuICAgIF1cbiAgfTtcbiAgLy8g54K55Ye76YCJ5LitXG4gIGZ1bGxzY3JlZW5Ub2dnbGUoaXRlbTogeyB0aXRsZTogYW55OyB2aXNpYmxlOiBib29sZWFuIH0pOiB2b2lkIHtcbiAgICB0aGlzLm91dGVyLmVtaXQoaXRlbSk7XG4gICAgdGhpcy5mbGFnID0gdHJ1ZTtcbiAgICB0aGlzLmNvbmZpZy5iYXNlTWFwLmZvckVhY2goKHZhbHVlOiB7IHRpdGxlOiBhbnk7IHZpc2libGU6IGJvb2xlYW4gfSkgPT4ge1xuICAgICAgaWYgKHZhbHVlLnRpdGxlID09PSBpdGVtLnRpdGxlKSB7XG4gICAgICAgIHZhbHVlLnZpc2libGUgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIC8vIOm8oOagh+enu+WFpVxuICBtb3VzZWVudGVyKCk6IHZvaWQge1xuICAgIHRoaXMuY29uZmlnLmJhc2VNYXAuZm9yRWFjaChcbiAgICAgICh2YWx1ZTogeyB2aXNpYmxlOiBhbnk7IGlzZGlzcGxheTogYm9vbGVhbiB9KSA9PiB7XG4gICAgICAgIHZhbHVlLmlzZGlzcGxheSA9IHRydWU7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuICAvLyDpvKDmoIfnp7vlh7pcbiAgbW91c2VsZWF2ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5mbGFnKSB7XG4gICAgICB0aGlzLmNvbmZpZy5iYXNlTWFwLmZvckVhY2goXG4gICAgICAgICh2YWx1ZTogeyB2aXNpYmxlOiBhbnk7IGlzZGlzcGxheTogYm9vbGVhbiB9KSA9PiB7XG4gICAgICAgICAgaWYgKHZhbHVlLnZpc2libGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHZhbHVlLmlzZGlzcGxheSA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlLmlzZGlzcGxheSA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgbmdPbkluaXQoKSB7fVxufVxuIl19