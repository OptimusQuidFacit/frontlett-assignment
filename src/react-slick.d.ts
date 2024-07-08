// react-slick.d.ts
declare module 'react-slick' {
    import { Component } from 'react';
  
    export interface Settings {
      dots?: boolean;
      infinite?: boolean;
      speed?: number;
      slidesToShow?: number;
      slidesToScroll?: number;
      adaptiveHeight?: boolean;
      arrows?: boolean;
      autoplay?: boolean;
      autoplaySpeed?: number;
      centerMode?: boolean;
      centerPadding?: string;
      cssEase?: string;
      draggable?: boolean;
      fade?: boolean;
      focusOnSelect?: boolean;
      initialSlide?: number;
      lazyLoad?: 'ondemand' | 'progressive';
      pauseOnHover?: boolean;
      responsive?: Array<{ breakpoint: number; settings: Partial<Settings> }>;
      rtl?: boolean;
      slide?: string;
      swipe?: boolean;
      swipeToSlide?: boolean;
      touchMove?: boolean;
      touchThreshold?: number;
      useCSS?: boolean;
      useTransform?: boolean;
      variableWidth?: boolean;
      vertical?: boolean;
      waitForAnimate?: boolean;
    }
  
    export default class Slider extends Component<{ settings?: Settings, className?:string, children?:React.JSX[] }> {}
  }
  