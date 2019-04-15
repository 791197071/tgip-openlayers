/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class HeatmapLegendComponent {
    constructor() {
        // 默认图层参数
        this.defaultConfig = {};
        this.config = this.defaultConfig;
    }
    /**
     * @return {?}
     */
    get config() {
        return this._config;
    }
    /**
     * 样式参数1
     * \@example *
     * {
     * visible: 'block',
     * color: '#fff',
     * size: {
     * width: '100px', // 总宽度
     * height: '25px' // 总高度
     * },
     * position: {
     * top: '',
     * bottom: '10px',
     * right: '',
     * left: '10px' // 全局定位
     * },
     * datas: [
     * {
     * title: '舒适',
     * background: 'rgba(0, 172, 0,1)',
     * },
     * {
     * title: '较舒适',
     * background: '#0000FF',
     * },
     * {
     * title: '一般',
     * background: '#FFFF00',
     * },
     * {
     * title: '拥挤',
     * background: '#00FFFF',
     * }
     * ]
     * };
     *
     * @param {?} value
     * @return {?}
     */
    set config(value) {
        this._config = Object.assign({}, this.defaultConfig, value);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
HeatmapLegendComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'tgip-ol-heatmap-legend',
                template: "<div style=\"position: absolute;\" [style.display]=\"config.visible\" [style.top]=\"config.position.top\"\n  [style.left]=\"config.position.left\" [style.right]=\"config.position.right\" [style.bottom]=\"config.position.bottom\">\n\n  <div style=\"display: flex;\">\n    <div *ngFor=\"let item of config.datas; let i = index\">\n      <div style=\"border: 2px solid #fff; text-align: center\" [style.background]=\"item.background\"\n        [style.width]=\"config.size.width\" [style.line-height]=\"config.size.height\" [style.height]=\"config.size.height\"\n        [style.color]=\"config.color\">\n        {{item.title}}</div>\n    </div>\n  </div>\n\n</div>",
                styles: [""]
            }] }
];
/** @nocollapse */
HeatmapLegendComponent.ctorParameters = () => [];
HeatmapLegendComponent.propDecorators = {
    config: [{ type: Input, args: ['config',] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    HeatmapLegendComponent.prototype._config;
    /**
     * @type {?}
     * @private
     */
    HeatmapLegendComponent.prototype.defaultConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhdG1hcC1sZWdlbmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGdpcC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9oZWF0bWFwLWxlZ2VuZC9oZWF0bWFwLWxlZ2VuZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUXpELE1BQU0sT0FBTyxzQkFBc0I7SUFDakM7O1FBa0RRLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBakR6QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDbkMsQ0FBQzs7OztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBdUNELElBQ0ksTUFBTSxDQUFDLEtBQVU7UUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzlELENBQUM7Ozs7SUFHRCxRQUFRO0lBQ1IsQ0FBQzs7O1lBM0RGLFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsZ3FCQUE4Qzs7YUFFL0M7Ozs7O3FCQStDRSxLQUFLLFNBQUMsUUFBUTs7Ozs7OztJQTFDZix5Q0FBcUI7Ozs7O0lBK0NyQiwrQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICd0Z2lwLW9sLWhlYXRtYXAtbGVnZW5kJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2hlYXRtYXAtbGVnZW5kLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaGVhdG1hcC1sZWdlbmQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEhlYXRtYXBMZWdlbmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNvbmZpZyA9IHRoaXMuZGVmYXVsdENvbmZpZztcbiAgfVxuICBwcml2YXRlIF9jb25maWc6IGFueTtcbiAgZ2V0IGNvbmZpZygpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9jb25maWc7XG4gIH1cbiAgLyoqXG4gICAqIOagt+W8j+WPguaVsDFcbiAgICogQHBhcmFtIHthbnl9IGNvbmZpZ1xuICAgKiBAZXhhbXBsZSAgICpcbiAgICoge1xuICAgIHZpc2libGU6ICdibG9jaycsXG4gICAgY29sb3I6ICcjZmZmJyxcbiAgICBzaXplOiB7XG4gICAgICB3aWR0aDogJzEwMHB4JywgLy8g5oC75a695bqmXG4gICAgICBoZWlnaHQ6ICcyNXB4JyAvLyDmgLvpq5jluqZcbiAgICB9LFxuICAgIHBvc2l0aW9uOiB7XG4gICAgICB0b3A6ICcnLFxuICAgICAgYm90dG9tOiAnMTBweCcsXG4gICAgICByaWdodDogJycsXG4gICAgICBsZWZ0OiAnMTBweCcgLy8g5YWo5bGA5a6a5L2NXG4gICAgfSxcbiAgICBkYXRhczogW1xuICAgICAge1xuICAgICAgICB0aXRsZTogJ+iIkumAgicsXG4gICAgICAgIGJhY2tncm91bmQ6ICdyZ2JhKDAsIDE3MiwgMCwxKScsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ+i+g+iIkumAgicsXG4gICAgICAgIGJhY2tncm91bmQ6ICcjMDAwMEZGJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAn5LiA6IisJyxcbiAgICAgICAgYmFja2dyb3VuZDogJyNGRkZGMDAnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICfmi6XmjKQnLFxuICAgICAgICBiYWNrZ3JvdW5kOiAnIzAwRkZGRicsXG4gICAgICB9XG4gICAgXVxuICB9O1xuICAgKlxuICAgKi9cbiAgQElucHV0KCdjb25maWcnKVxuICBzZXQgY29uZmlnKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRDb25maWcsIHZhbHVlKTtcbiAgfVxuICAvLyDpu5jorqTlm77lsYLlj4LmlbBcbiAgcHJpdmF0ZSBkZWZhdWx0Q29uZmlnID0ge307XG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==