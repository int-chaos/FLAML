"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7005],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>d});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(t),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||l;return t?n.createElement(f,o(o({ref:r},u),{},{components:t})):n.createElement(f,o({ref:r},u))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8726:(e,r,t)=>{t.r(r),t.d(r,{contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=t(7462),a=(t(7294),t(3905));const l={sidebar_label:"ml",title:"ml"},o=void 0,i={unversionedId:"reference/ml",id:"reference/ml",isDocsHomePage:!1,title:"ml",description:"sklearn\\metric\\loss\\_score",source:"@site/docs/reference/ml.md",sourceDirName:"reference",slug:"/reference/ml",permalink:"/FLAML/docs/reference/ml",editUrl:"https://github.com/microsoft/FLAML/edit/main/website/docs/reference/ml.md",tags:[],version:"current",frontMatter:{sidebar_label:"ml",title:"ml"},sidebar:"referenceSideBar",previous:{title:"data",permalink:"/FLAML/docs/reference/data"},next:{title:"model",permalink:"/FLAML/docs/reference/model"}},s=[{value:"sklearn_metric_loss_score",id:"sklearn_metric_loss_score",children:[],level:4},{value:"norm_confusion_matrix",id:"norm_confusion_matrix",children:[],level:4},{value:"multi_class_curves",id:"multi_class_curves",children:[],level:4}],c={toc:s};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"sklearn_metric_loss_score"},"sklearn","_","metric","_","loss","_","score"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def sklearn_metric_loss_score(metric_name, y_predict, y_true, labels=None, sample_weight=None, groups=None)\n")),(0,a.kt)("p",null,"Loss using the specified metric."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"metric_name")," - A string of the metric name, one of\n'r2', 'rmse', 'mae', 'mse', 'accuracy', 'roc_auc', 'roc_auc_ovr',\n'roc_auc_ovo', 'log_loss', 'mape', 'f1', 'ap', 'ndcg',\n'micro_f1', 'macro_f1'."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"y_predict")," - A 1d or 2d numpy array of the predictions which can be\nused to calculate the metric. E.g., 2d for log_loss and 1d\nfor others."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"y_true")," - A 1d numpy array of the true labels."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"labels")," - A list or an array of the unique labels."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sample_weight")," - A 1d numpy array of the sample weight."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"groups")," - A 1d numpy array of the group labels.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"score")," - A float number of the loss, the lower the better.")),(0,a.kt)("h4",{id:"norm_confusion_matrix"},"norm","_","confusion","_","matrix"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def norm_confusion_matrix(y_true, y_pred)\n")),(0,a.kt)("p",null,"normalized confusion matrix."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"estimator")," - A multi-class classification estimator."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"y_true")," - A numpy array or a pandas series of true labels."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"y_pred")," - A numpy array or a pandas series of predicted labels.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns"),":"),(0,a.kt)("p",null,"  A normalized confusion matrix."),(0,a.kt)("h4",{id:"multi_class_curves"},"multi","_","class","_","curves"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def multi_class_curves(y_true, y_pred_proba, curve_func)\n")),(0,a.kt)("p",null,"Binarize the data for multi-class tasks and produce ROC or precision-recall curves."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"y_true")," - A numpy array or a pandas series of true labels."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"y_pred_proba")," - A numpy array or a pandas dataframe of predicted probabilites."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"curve_func")," - A function to produce a curve (e.g., roc_curve or precision_recall_curve).")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns"),":"),(0,a.kt)("p",null,"  A tuple of two dictionaries with the same set of keys (class indices).\nThe first dictionary curve_x stores the x coordinates of each curve, e.g.,\ncurve_x","[0]"," is an 1D array of the x coordinates of class 0.\nThe second dictionary curve_y stores the y coordinates of each curve, e.g.,\ncurve_y","[0]"," is an 1D array of the y coordinates of class 0."))}u.isMDXComponent=!0}}]);