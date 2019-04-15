/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class ScenicLegendComponent {
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
     * 样式参数
     * \@example
     *
     * private defaultConfig = {
     * openStyle: {
     * size: {
     * width: '50px', // 总宽度
     * height: '50px' // 总高度
     * },
     * position: {
     * top: '',
     * bottom: '10px',
     * right: '',
     * left: '10px' // 全局定位
     * },
     * openImage: 'assets/show_map.png',
     * },
     * closeStyle: {
     * size: {
     * width: '50px', // 总宽度
     * height: '50px' // 总高度
     * },
     * position: {
     * top: '10px',
     * bottom: '10px',
     * right: '10px',
     * left: '10px' // 全局定位
     * },
     * closeImage: 'assets/close.png',
     * },
     * title: '图例',
     * gradestyle: {
     * color: 'white',
     * height: '20px',
     * width: '50px'
     * },
     * numberstyle: {
     * color: 'white',
     * width: '50px',
     * height: '20px'
     * },
     * Iconstyle: {
     * color: 'white',
     * width: '30px',
     * height: '30px'
     * },
     * visible: 'block',
     * background: '#000',
     * border: '1px solid #fff',
     * size: {
     * width: '200px', // 总宽度
     * height: 'auto' // 总高度
     * },
     * position: {
     * top: '10px',
     * bottom: '10px',
     * right: '10px',
     * left: '10px' // 全局定位
     * },
     * datas0: [
     * {
     * title: '景区等级',
     * visible: 'true', // 显示
     * type: 'colorType',
     * color: 'white',
     * titleStyle: {
     * color: 'gray'
     * },
     * data: [{
     * name: '5A',
     * value: 'rgba(255,152,1,1)'
     * }, {
     * name: '4A',
     * value: 'rgba(159,224,96,1)'
     * }, {
     * name: '3A',
     * value: 'rgba(2,139,255,1)'
     * }, {
     * name: '2A',
     * value: 'rgba(21,112,176,1)'
     * }]
     * }],
     * datas1: [
     * {
     * title: 'A景区数量统计',
     * visible: 'true', // 显示
     * type: 'colorNum',
     * color: 'white',
     * titleStyle: {
     * color: 'gray',
     * },
     * data: [{
     * name: '30',
     * value: 'rgba(255,152,1,1)'
     * }, {
     * name: '40',
     * value: 'rgba(159,224,96,1)'
     * }, {
     * name: '50',
     * value: 'rgba(2,139,255,1)'
     * }, {
     * name: '60',
     * value: 'rgba(21,112,176,1)'
     * }]
     * }],
     * datas2: [
     * {
     * title: 'B景区数量统计',
     * visible: 'true', // 显示
     * type: 'colorNum',
     * color: 'white',
     * titleStyle: {
     * color: 'gray',
     * },
     * data: [{
     * name: '30',
     * src: 'assets/show_map.png',
     * }, {
     * name: '40',
     * src: 'assets/show_map.png',
     * }, {
     * name: '50',
     * src: 'assets/show_map.png',
     * }, {
     * name: '60',
     * src: 'assets/show_map.png',
     * }]
     * }],
     * datas5: [
     * {
     * title: 'B景区数量统计88',
     * visible: 'true', // 显示
     * type: 'colorNum',
     * color: 'white',
     * titleStyle: {
     * color: 'gray',
     * },
     * data: [{
     * name: '30',
     * src: 'assets/show_map.png',
     * }, {
     * name: '40',
     * src: 'assets/show_map.png',
     * }, {
     * name: '50',
     * src: 'assets/show_map.png',
     * }, {
     * name: '60',
     * src: 'assets/show_map.png',
     * }]
     * }]
     * };
     *
     * @param {?} value
     * @return {?}
     */
    set config(value) {
        this._config = Object.assign({}, this.defaultConfig, value);
    }
    // 显示
    /**
     * @return {?}
     */
    show() {
        this.hide = false;
    }
    // 影藏
    /**
     * @return {?}
     */
    vanish() {
        this.hide = true;
    }
    // mouseenter 移入
    /**
     * @return {?}
     */
    mouseenter() {
        this.flag = true;
    }
    // mouseleave 移出
    /**
     * @return {?}
     */
    mouseleave() {
        this.flag = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.hide = false;
        this.flag = false;
    }
}
ScenicLegendComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'tgip-ol-scenic-legend',
                template: "<div style=\"position: absolute\" [style.width]=\"config.openStyle.size.width\"\n  [style.height]=\"config.openStyle.size.height\" \n  [style.top]=\"config.openStyle.position.top\"\n  [style.left]=\"config.openStyle.position.left\" \n  [style.right]=\"config.openStyle.position.right\"\n  [style.bottom]=\"config.openStyle.position.bottom\"\n  (click)=\"vanish()\" [ngStyle]=\"{\n  display: hide === true ? 'none' : 'block'\n}\">\n  <img src=\"{{config.openStyle.openImage}}\" style=\"width: 100%;\" />\n</div>\n<div [ngStyle]=\"{\n  display: hide === false ? 'none' : 'block'\n}\">\n  <div (mouseenter)=\"mouseenter()\" (mouseleave)=\"mouseleave()\" style=\"position: absolute;padding: 0px;\"\n  [style.top]=\"config.openStyle.position.top\"\n  [style.left]=\"config.openStyle.position.left\" \n  [style.right]=\"config.openStyle.position.right\"\n  [style.bottom]=\"config.openStyle.position.bottom\">\n    <div (click)=\"show()\" style=\"width: 20px;  position: relative;  top: 5px;  right: 5px;  float: right;\" [ngStyle]=\"{\n    display: flag === false ? 'none' : 'block'\n  }\">\n      <img src=\"{{config.closeStyle.closeImage}}\" style=\"width: 100%;\" />\n    </div>\n    <div style=\"padding: 0px;\" [style.background]=\"config.background\" [style.width]=\"config.size.width\"\n      [style.height]=\"config.size.height\">\n      <div [style.border]=\"config.border\">\n        <div style=\"margin: 10px;\" [style.border-bottom]=\"config.border\" [style.color]=\"config.gradestyle.color\">\n          {{config.title}}\n        </div>\n        <!-- colorType -->\n        <div style=\"margin: 10px;\" [ngStyle]=\"{\n          display: config.datas0[0].visible === 'false' ? 'none' : 'block'\n        }\">\n          <p [style.color]=\"config.datas0[0].titleStyle.color\">{{config.datas0[0].title}}</p>\n          <div *ngFor=\"let item of config.datas0[0].data; let i = index\" style=\"margin-bottom: 10px;\"\n            [style.height]=\"config.gradestyle.height\" [style.line-height]=\"config.gradestyle.height\">\n            <div style=\"border-radius: 5px;float: left;margin-right: 20px;\" [style.background]=\"item.value\"\n              [style.height]=\"config.gradestyle.height\" [style.width]=\"config.gradestyle.width\"></div>\n            <div [style.color]=\"config.datas1[0].color\" [style.height]=\"config.gradestyle.height\">{{item.name}}</div>\n          </div>\n        </div>\n        <!-- colorNum -->\n        <div style=\"margin: 10px;\"\n        [ngStyle]=\"{\n          display: config.datas1[0].visible === 'false' ? 'none' : 'block'\n        }\">\n          <p [style.color]=\"config.datas1[0].titleStyle.color\">{{config.datas1[0].title}}</p>\n          <div style=\"margin-bottom: 10px;display: flex;\" [style.height]=\"config.numberstyle.height\"\n            [style.line-height]=\"config.numberstyle.height\">\n            <span *ngFor=\"let item of config.datas1[0].data; let i = index\" style=\"border-radius: 5px;float: left;\"\n              [style.background]=\"item.value\" [style.width]=\"config.numberstyle.width\"\n              [style.height]=\"config.numberstyle.height\"></span>\n          </div>\n          <div style=\"margin-bottom: 10px; display: flex;\" [style.height]=\"config.numberstyle.height\"\n            [style.line-height]=\"config.numberstyle.height\">\n            <span *ngFor=\"let item of config.datas1[0].data; let i = index\" style=\"  float: left; text-align: left\"\n              [style.color]=\"config.datas1[0].color\" [style.width]=\"config.numberstyle.width\"\n              [style.line-height]=\"config.numberstyle.height\">{{item.name}}</span>\n          </div>\n        </div>\n        <!-- iconType -->\n        <div style=\"margin: 10px; overflow: hidden;\"\n        [ngStyle]=\"{\n          display: config.datas2[0].visible === 'false' ? 'none' : 'block'\n        }\">\n          <p [style.color]=\"config.datas1[0].titleStyle.color\">{{config.datas2[0].title}}</p>\n          <div style=\"width: 50%; float: left;\">\n            <div *ngFor=\"let item of config.datas2[0].data; let i = index\" style=\"margin-bottom: 10px; float: left;\"\n              [style.height]=\"config.Iconstyle.height\" [style.line-height]=\"config.Iconstyle.height\">\n              <span style=\" float: left;\"  [style.height]=\"config.Iconstyle.height\" [style.width]=\"config.Iconstyle.width\"> <img src=\"{{item.src}}\"\n                  style=\"width: 100%;\" /></span>\n              <span style=\"  float: left; text-align: center\" [style.color]=\"config.datas1[0].color\"\n                [style.width]=\"config.Iconstyle.width\"\n                [style.line-height]=\"config.Iconstyle.height\">{{item.name}}</span>\n            </div>\n          </div>\n          <div style=\"width: 50%; float: left;\">\n            <div *ngFor=\"let item of config.datas2[0].data; let i = index\" style=\"margin-bottom: 10px; float: left;\"\n              [style.height]=\"config.Iconstyle.height\" [style.line-height]=\"config.Iconstyle.height\">\n              <span style=\" float: left;\"  [style.height]=\"config.Iconstyle.height\" [style.width]=\"config.Iconstyle.width\"> <img src=\"{{item.src}}\"\n                  style=\"width: 100%;\" /></span>\n              <span style=\"  float: left; text-align: center\" [style.color]=\"config.datas1[0].color\"\n                [style.width]=\"config.Iconstyle.width\"\n                [style.line-height]=\"config.Iconstyle.height\">{{item.name}}</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>",
                styles: [""]
            }] }
];
/** @nocollapse */
ScenicLegendComponent.ctorParameters = () => [];
ScenicLegendComponent.propDecorators = {
    config: [{ type: Input, args: ['config',] }]
};
if (false) {
    /** @type {?} */
    ScenicLegendComponent.prototype.hide;
    /** @type {?} */
    ScenicLegendComponent.prototype.flag;
    /**
     * @type {?}
     * @private
     */
    ScenicLegendComponent.prototype._config;
    /**
     * @type {?}
     * @private
     */
    ScenicLegendComponent.prototype.defaultConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NlbmljLWxlZ2VuZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90Z2lwLW9wZW5sYXllcnMvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL3NjZW5pYy1sZWdlbmQvc2NlbmljLWxlZ2VuZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUXpELE1BQU0sT0FBTyxxQkFBcUI7SUFDaEM7O1FBMEtRLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBekt6QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDbkMsQ0FBQzs7OztJQUlELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQTZKRCxJQUNJLE1BQU0sQ0FBQyxLQUFVO1FBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7OztJQUtELElBQUk7UUFDRixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7OztJQUVELE1BQU07UUFDSixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNuQixDQUFDOzs7OztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUVuQixDQUFDOzs7OztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7O0lBQ0QsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBQ3BCLENBQUM7OztZQXZNRixTQUFTLFNBQUM7O2dCQUVULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLDY4S0FBNkM7O2FBRTlDOzs7OztxQkF1S0UsS0FBSyxTQUFDLFFBQVE7Ozs7SUFsS2YscUNBQVU7O0lBQ1YscUNBQVU7Ozs7O0lBQ1Ysd0NBQXFCOzs7OztJQXFLckIsOENBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAndGdpcC1vbC1zY2VuaWMtbGVnZW5kJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NjZW5pYy1sZWdlbmQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zY2VuaWMtbGVnZW5kLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTY2VuaWNMZWdlbmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNvbmZpZyA9IHRoaXMuZGVmYXVsdENvbmZpZztcbiAgfVxuICBoaWRlOiBhbnk7XG4gIGZsYWc6IGFueTtcbiAgcHJpdmF0ZSBfY29uZmlnOiBhbnk7XG4gIGdldCBjb25maWcoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xuICB9XG4gIC8qKlxuICAgKiDmoLflvI/lj4LmlbBcbiAgICogQHBhcmFtIHthbnl9IGNvbmZpZ1xuICAgKiBAZXhhbXBsZVxuICAgKlxuICAgKiBwcml2YXRlIGRlZmF1bHRDb25maWcgPSB7XG4gICAgb3BlblN0eWxlOiB7XG4gICAgICBzaXplOiB7XG4gICAgICAgIHdpZHRoOiAnNTBweCcsIC8vIOaAu+WuveW6plxuICAgICAgICBoZWlnaHQ6ICc1MHB4JyAvLyDmgLvpq5jluqZcbiAgICAgIH0sXG4gICAgICBwb3NpdGlvbjoge1xuICAgICAgICB0b3A6ICcnLFxuICAgICAgICBib3R0b206ICcxMHB4JyxcbiAgICAgICAgcmlnaHQ6ICcnLFxuICAgICAgICBsZWZ0OiAnMTBweCcgLy8g5YWo5bGA5a6a5L2NXG4gICAgICB9LFxuICAgICAgb3BlbkltYWdlOiAnYXNzZXRzL3Nob3dfbWFwLnBuZycsXG4gICAgfSxcbiAgICBjbG9zZVN0eWxlOiB7XG4gICAgICBzaXplOiB7XG4gICAgICAgIHdpZHRoOiAnNTBweCcsIC8vIOaAu+WuveW6plxuICAgICAgICBoZWlnaHQ6ICc1MHB4JyAvLyDmgLvpq5jluqZcbiAgICAgIH0sXG4gICAgICBwb3NpdGlvbjoge1xuICAgICAgICB0b3A6ICcxMHB4JyxcbiAgICAgICAgYm90dG9tOiAnMTBweCcsXG4gICAgICAgIHJpZ2h0OiAnMTBweCcsXG4gICAgICAgIGxlZnQ6ICcxMHB4JyAvLyDlhajlsYDlrprkvY1cbiAgICAgIH0sXG4gICAgICBjbG9zZUltYWdlOiAnYXNzZXRzL2Nsb3NlLnBuZycsXG4gICAgfSxcbiAgICB0aXRsZTogJ+WbvuS+iycsXG4gICAgZ3JhZGVzdHlsZToge1xuICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICBoZWlnaHQ6ICcyMHB4JyxcbiAgICAgIHdpZHRoOiAnNTBweCdcbiAgICB9LFxuICAgIG51bWJlcnN0eWxlOiB7XG4gICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgIHdpZHRoOiAnNTBweCcsXG4gICAgICBoZWlnaHQ6ICcyMHB4J1xuICAgIH0sXG4gICAgSWNvbnN0eWxlOiB7XG4gICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgIHdpZHRoOiAnMzBweCcsXG4gICAgICBoZWlnaHQ6ICczMHB4J1xuICAgIH0sXG4gICAgdmlzaWJsZTogJ2Jsb2NrJyxcbiAgICBiYWNrZ3JvdW5kOiAnIzAwMCcsXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkICNmZmYnLFxuICAgIHNpemU6IHtcbiAgICAgIHdpZHRoOiAnMjAwcHgnLCAvLyDmgLvlrr3luqZcbiAgICAgIGhlaWdodDogJ2F1dG8nIC8vIOaAu+mrmOW6plxuICAgIH0sXG4gICAgcG9zaXRpb246IHtcbiAgICAgIHRvcDogJzEwcHgnLFxuICAgICAgYm90dG9tOiAnMTBweCcsXG4gICAgICByaWdodDogJzEwcHgnLFxuICAgICAgbGVmdDogJzEwcHgnIC8vIOWFqOWxgOWumuS9jVxuICAgIH0sXG4gICAgZGF0YXMwOiBbXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAn5pmv5Yy6562J57qnJyxcbiAgICAgICAgdmlzaWJsZTogJ3RydWUnLCAvLyDmmL7npLpcbiAgICAgICAgdHlwZTogJ2NvbG9yVHlwZScsXG4gICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICB0aXRsZVN0eWxlOiB7XG4gICAgICAgICAgY29sb3I6ICdncmF5J1xuICAgICAgICB9LFxuICAgICAgICBkYXRhOiBbe1xuICAgICAgICAgIG5hbWU6ICc1QScsXG4gICAgICAgICAgdmFsdWU6ICdyZ2JhKDI1NSwxNTIsMSwxKSdcbiAgICAgICAgfSwge1xuICAgICAgICAgIG5hbWU6ICc0QScsXG4gICAgICAgICAgdmFsdWU6ICdyZ2JhKDE1OSwyMjQsOTYsMSknXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBuYW1lOiAnM0EnLFxuICAgICAgICAgIHZhbHVlOiAncmdiYSgyLDEzOSwyNTUsMSknXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBuYW1lOiAnMkEnLFxuICAgICAgICAgIHZhbHVlOiAncmdiYSgyMSwxMTIsMTc2LDEpJ1xuICAgICAgICB9XVxuICAgICAgfV0sXG4gICAgZGF0YXMxOiBbXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAnQeaZr+WMuuaVsOmHj+e7n+iuoScsXG4gICAgICAgIHZpc2libGU6ICd0cnVlJywgLy8g5pi+56S6XG4gICAgICAgIHR5cGU6ICdjb2xvck51bScsXG4gICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICB0aXRsZVN0eWxlOiB7XG4gICAgICAgICAgY29sb3I6ICdncmF5JyxcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YTogW3tcbiAgICAgICAgICBuYW1lOiAnMzAnLFxuICAgICAgICAgIHZhbHVlOiAncmdiYSgyNTUsMTUyLDEsMSknXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBuYW1lOiAnNDAnLFxuICAgICAgICAgIHZhbHVlOiAncmdiYSgxNTksMjI0LDk2LDEpJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgbmFtZTogJzUwJyxcbiAgICAgICAgICB2YWx1ZTogJ3JnYmEoMiwxMzksMjU1LDEpJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgbmFtZTogJzYwJyxcbiAgICAgICAgICB2YWx1ZTogJ3JnYmEoMjEsMTEyLDE3NiwxKSdcbiAgICAgICAgfV1cbiAgICAgIH1dLFxuICAgIGRhdGFzMjogW1xuICAgICAge1xuICAgICAgICB0aXRsZTogJ0Lmma/ljLrmlbDph4/nu5/orqEnLFxuICAgICAgICB2aXNpYmxlOiAndHJ1ZScsIC8vIOaYvuekulxuICAgICAgICB0eXBlOiAnY29sb3JOdW0nLFxuICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgdGl0bGVTdHlsZToge1xuICAgICAgICAgIGNvbG9yOiAnZ3JheScsXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGE6IFt7XG4gICAgICAgICAgbmFtZTogJzMwJyxcbiAgICAgICAgICBzcmM6ICdhc3NldHMvc2hvd19tYXAucG5nJyxcbiAgICAgICAgfSwge1xuICAgICAgICAgIG5hbWU6ICc0MCcsXG4gICAgICAgICAgc3JjOiAnYXNzZXRzL3Nob3dfbWFwLnBuZycsXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBuYW1lOiAnNTAnLFxuICAgICAgICAgIHNyYzogJ2Fzc2V0cy9zaG93X21hcC5wbmcnLFxuICAgICAgICB9LCB7XG4gICAgICAgICAgbmFtZTogJzYwJyxcbiAgICAgICAgICBzcmM6ICdhc3NldHMvc2hvd19tYXAucG5nJyxcbiAgICAgICAgfV1cbiAgICAgIH1dLFxuICAgIGRhdGFzNTogW1xuICAgICAge1xuICAgICAgICB0aXRsZTogJ0Lmma/ljLrmlbDph4/nu5/orqE4OCcsXG4gICAgICAgIHZpc2libGU6ICd0cnVlJywgLy8g5pi+56S6XG4gICAgICAgIHR5cGU6ICdjb2xvck51bScsXG4gICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICB0aXRsZVN0eWxlOiB7XG4gICAgICAgICAgY29sb3I6ICdncmF5JyxcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YTogW3tcbiAgICAgICAgICBuYW1lOiAnMzAnLFxuICAgICAgICAgIHNyYzogJ2Fzc2V0cy9zaG93X21hcC5wbmcnLFxuICAgICAgICB9LCB7XG4gICAgICAgICAgbmFtZTogJzQwJyxcbiAgICAgICAgICBzcmM6ICdhc3NldHMvc2hvd19tYXAucG5nJyxcbiAgICAgICAgfSwge1xuICAgICAgICAgIG5hbWU6ICc1MCcsXG4gICAgICAgICAgc3JjOiAnYXNzZXRzL3Nob3dfbWFwLnBuZycsXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBuYW1lOiAnNjAnLFxuICAgICAgICAgIHNyYzogJ2Fzc2V0cy9zaG93X21hcC5wbmcnLFxuICAgICAgICB9XVxuICAgICAgfV1cbiAgfTtcbiAgICpcbiAgICovXG4gIEBJbnB1dCgnY29uZmlnJylcbiAgc2V0IGNvbmZpZyh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kZWZhdWx0Q29uZmlnLCB2YWx1ZSk7XG4gIH1cbiAgLy8g6buY6K6k5Zu+5bGC5Y+C5pWwXG4gIHByaXZhdGUgZGVmYXVsdENvbmZpZyA9IHt9O1xuXG4gIC8vIOaYvuekulxuICBzaG93KCk6IHZvaWQge1xuICAgIHRoaXMuaGlkZSA9IGZhbHNlO1xuICB9XG4gIC8vIOW9seiXj1xuICB2YW5pc2goKTogdm9pZCB7XG4gICAgdGhpcy5oaWRlID0gdHJ1ZTtcbiAgfVxuICAvLyBtb3VzZWVudGVyIOenu+WFpVxuICBtb3VzZWVudGVyKCk6IHZvaWQge1xuICAgIHRoaXMuZmxhZyA9IHRydWU7XG5cbiAgfVxuICAvLyBtb3VzZWxlYXZlIOenu+WHulxuICBtb3VzZWxlYXZlKCk6IHZvaWQge1xuICAgIHRoaXMuZmxhZyA9IGZhbHNlO1xuICB9XG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaGlkZSA9IGZhbHNlO1xuICAgIHRoaXMuZmxhZyA9IGZhbHNlO1xuICB9XG5cbn1cbiJdfQ==