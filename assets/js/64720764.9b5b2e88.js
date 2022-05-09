"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2215],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),m=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=m(n),d=r,_=c["".concat(i,".").concat(d)]||c[d]||p[d]||o;return n?a.createElement(_,l(l({ref:t},u),{},{components:n})):a.createElement(_,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var m=2;m<o;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4595:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return m},toc:function(){return u},default:function(){return c}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=["components"],s={},i="AutoML - NLP",m={unversionedId:"Examples/AutoML-NLP",id:"Examples/AutoML-NLP",isDocsHomePage:!1,title:"AutoML - NLP",description:"Requirements",source:"@site/docs/Examples/AutoML-NLP.md",sourceDirName:"Examples",slug:"/Examples/AutoML-NLP",permalink:"/FLAML/docs/Examples/AutoML-NLP",editUrl:"https://github.com/microsoft/FLAML/edit/main/website/docs/Examples/AutoML-NLP.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"AutoML - Classification",permalink:"/FLAML/docs/Examples/AutoML-Classification"},next:{title:"AutoML - Rank",permalink:"/FLAML/docs/Examples/AutoML-Rank"}},u=[{value:"Requirements",id:"requirements",children:[],level:3},{value:"A simple sequence classification example",id:"a-simple-sequence-classification-example",children:[{value:"Sample output",id:"sample-output",children:[],level:4}],level:3},{value:"A simple sequence regression example",id:"a-simple-sequence-regression-example",children:[{value:"Sample output",id:"sample-output-1",children:[],level:4}],level:3},{value:"A simple summarization example",id:"a-simple-summarization-example",children:[{value:"Sample Output",id:"sample-output-2",children:[],level:4}],level:3},{value:"Link to Jupyter notebook",id:"link-to-jupyter-notebook",children:[],level:3}],p={toc:u};function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"automl---nlp"},"AutoML - NLP"),(0,o.kt)("h3",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"This example requires GPU. Install the ","[nlp]"," option:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'pip install "flaml[nlp]"\n')),(0,o.kt)("h3",{id:"a-simple-sequence-classification-example"},"A simple sequence classification example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from flaml import AutoML\nfrom datasets import load_dataset\n\ntrain_dataset = load_dataset("glue", "mrpc", split="train").to_pandas()\ndev_dataset = load_dataset("glue", "mrpc", split="validation").to_pandas()\ntest_dataset = load_dataset("glue", "mrpc", split="test").to_pandas()\ncustom_sent_keys = ["sentence1", "sentence2"]\nlabel_key = "label"\nX_train, y_train = train_dataset[custom_sent_keys], train_dataset[label_key]\nX_val, y_val = dev_dataset[custom_sent_keys], dev_dataset[label_key]\nX_test = test_dataset[custom_sent_keys]\n\nautoml = AutoML()\nautoml_settings = {\n    "time_budget": 100,\n    "task": "seq-classification",\n    "fit_kwargs_by_estimator": {  \n        "transformer":\n       {\n           "output_dir": "data/output/"  # if model_path is not set, the default model is facebook/muppet-roberta-base: https://huggingface.co/facebook/muppet-roberta-base\n       }\n    },  # setting the huggingface arguments: output directory\n    "gpu_per_trial": 1,                         # set to 0 if no GPU is available\n}\nautoml.fit(X_train=X_train, y_train=y_train, X_val=X_val, y_val=y_val, **automl_settings)\nautoml.predict(X_test)\n')),(0,o.kt)("h4",{id:"sample-output"},"Sample output"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[flaml.automl: 12-06 08:21:39] {1943} INFO - task = seq-classification\n[flaml.automl: 12-06 08:21:39] {1945} INFO - Data split method: stratified\n[flaml.automl: 12-06 08:21:39] {1949} INFO - Evaluation method: holdout\n[flaml.automl: 12-06 08:21:39] {2019} INFO - Minimizing error metric: 1-accuracy\n[flaml.automl: 12-06 08:21:39] {2071} INFO - List of ML learners in AutoML Run: ['transformer']\n[flaml.automl: 12-06 08:21:39] {2311} INFO - iteration 0, current learner transformer\n{'data/output/train_2021-12-06_08-21-53/train_8947b1b2_1_n=1e-06,s=9223372036854775807,e=1e-05,s=-1,s=0.45765,e=32,d=42,o=0.0,y=0.0_2021-12-06_08-21-53/checkpoint-53': 53}\n[flaml.automl: 12-06 08:22:56] {2424} INFO - Estimated sufficient time budget=766860s. Estimated necessary time budget=767s.\n[flaml.automl: 12-06 08:22:56] {2499} INFO -  at 76.7s, estimator transformer's best error=0.1740,      best estimator transformer's best error=0.1740\n[flaml.automl: 12-06 08:22:56] {2606} INFO - selected model: <flaml.nlp.huggingface.trainer.TrainerForAuto object at 0x7f49ea8414f0>\n[flaml.automl: 12-06 08:22:56] {2100} INFO - fit succeeded\n[flaml.automl: 12-06 08:22:56] {2101} INFO - Time taken to find the best model: 76.69802761077881\n[flaml.automl: 12-06 08:22:56] {2112} WARNING - Time taken to find the best model is 77% of the provided time budget and not all estimators' hyperparameter search converged. Consider increasing the time budget.\n")),(0,o.kt)("h3",{id:"a-simple-sequence-regression-example"},"A simple sequence regression example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from flaml import AutoML\nfrom datasets import load_dataset\n\ntrain_dataset = (\n    load_dataset("glue", "stsb", split="train").to_pandas()\n)\ndev_dataset = (\n    load_dataset("glue", "stsb", split="train").to_pandas()\n)\ncustom_sent_keys = ["sentence1", "sentence2"]\nlabel_key = "label"\nX_train = train_dataset[custom_sent_keys]\ny_train = train_dataset[label_key]\nX_val = dev_dataset[custom_sent_keys]\ny_val = dev_dataset[label_key]\n\nautoml = AutoML()\nautoml_settings = {\n    "gpu_per_trial": 0,\n    "time_budget": 20,\n    "task": "seq-regression",\n    "metric": "rmse",\n}\nautoml_settings["fit_kwargs_by_estimator"] = {  # setting the huggingface arguments\n    "transformer": {\n        "model_path": "google/electra-small-discriminator", # if model_path is not set, the default model is facebook/muppet-roberta-base: https://huggingface.co/facebook/muppet-roberta-base\n        "output_dir": "data/output/",                       # setting the output directory\n        "ckpt_per_epoch": 5,                                # setting the number of checkpoints per epoch\n        "fp16": False,  \n    }   # setting whether to use FP16\n}\nautoml.fit(\n    X_train=X_train, y_train=y_train, X_val=X_val, y_val=y_val, **automl_settings\n)\n')),(0,o.kt)("h4",{id:"sample-output-1"},"Sample output"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[flaml.automl: 12-20 11:47:28] {1965} INFO - task = seq-regression\n[flaml.automl: 12-20 11:47:28] {1967} INFO - Data split method: uniform\n[flaml.automl: 12-20 11:47:28] {1971} INFO - Evaluation method: holdout\n[flaml.automl: 12-20 11:47:28] {2063} INFO - Minimizing error metric: rmse\n[flaml.automl: 12-20 11:47:28] {2115} INFO - List of ML learners in AutoML Run: ['transformer']\n[flaml.automl: 12-20 11:47:28] {2355} INFO - iteration 0, current learner transformer\n")),(0,o.kt)("h3",{id:"a-simple-summarization-example"},"A simple summarization example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from flaml import AutoML\nfrom datasets import load_dataset\n\ntrain_dataset = (\n    load_dataset("xsum", split="train").to_pandas()\n)\ndev_dataset = (\n    load_dataset("xsum", split="validation").to_pandas()\n)\ncustom_sent_keys = ["document"]\nlabel_key = "summary"\n\nX_train = train_dataset[custom_sent_keys]\ny_train = train_dataset[label_key]\n\nX_val = dev_dataset[custom_sent_keys]\ny_val = dev_dataset[label_key]\n\nautoml = AutoML()\nautoml_settings = {\n    "gpu_per_trial": 1,\n    "time_budget": 20,\n    "task": "summarization",\n    "metric": "rouge1",\n}\nautoml_settings["fit_kwargs_by_estimator"] = {      # setting the huggingface arguments\n    "transformer": {\n        "model_path": "t5-small",             # if model_path is not set, the default model is t5-small: https://huggingface.co/t5-small\n        "output_dir": "data/output/",         # setting the output directory\n        "ckpt_per_epoch": 5,                  # setting the number of checkpoints per epoch\n        "fp16": False,  \n    } # setting whether to use FP16\n}\nautoml.fit(\n    X_train=X_train, y_train=y_train, X_val=X_val, y_val=y_val, **automl_settings\n)\n')),(0,o.kt)("h4",{id:"sample-output-2"},"Sample Output"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'[flaml.automl: 12-20 11:44:03] {1965} INFO - task = summarization\n[flaml.automl: 12-20 11:44:03] {1967} INFO - Data split method: uniform\n[flaml.automl: 12-20 11:44:03] {1971} INFO - Evaluation method: holdout\n[flaml.automl: 12-20 11:44:03] {2063} INFO - Minimizing error metric: -rouge\n[flaml.automl: 12-20 11:44:03] {2115} INFO - List of ML learners in AutoML Run: [\'transformer\']\n[flaml.automl: 12-20 11:44:03] {2355} INFO - iteration 0, current learner transformer\nloading configuration file https://huggingface.co/t5-small/resolve/main/config.json from cache at /home/xliu127/.cache/huggingface/transformers/fe501e8fd6425b8ec93df37767fcce78ce626e34cc5edc859c662350cf712e41.406701565c0afd9899544c1cb8b93185a76f00b31e5ce7f6e18bbaef02241985\nModel config T5Config {\n  "_name_or_path": "t5-small",\n  "architectures": [\n    "T5WithLMHeadModel"\n  ],\n  "d_ff": 2048,\n  "d_kv": 64,\n  "d_model": 512,\n  "decoder_start_token_id": 0,\n  "dropout_rate": 0.1,\n  "eos_token_id": 1,\n  "feed_forward_proj": "relu",\n  "initializer_factor": 1.0,\n  "is_encoder_decoder": true,\n  "layer_norm_epsilon": 1e-06,\n  "model_type": "t5",\n  "n_positions": 512,\n  "num_decoder_layers": 6,\n  "num_heads": 8,\n  "num_layers": 6,\n  "output_past": true,\n  "pad_token_id": 0,\n  "relative_attention_num_buckets": 32,\n  "task_specific_params": {\n    "summarization": {\n      "early_stopping": true,\n      "length_penalty": 2.0,\n      "max_length": 200,\n      "min_length": 30,\n      "no_repeat_ngram_size": 3,\n      "num_beams": 4,\n      "prefix": "summarize: "\n    },\n    "translation_en_to_de": {\n      "early_stopping": true,\n      "max_length": 300,\n      "num_beams": 4,\n      "prefix": "translate English to German: "\n    },\n    "translation_en_to_fr": {\n      "early_stopping": true,\n      "max_length": 300,\n      "num_beams": 4,\n      "prefix": "translate English to French: "\n    },\n    "translation_en_to_ro": {\n      "early_stopping": true,\n      "max_length": 300,\n      "num_beams": 4,\n      "prefix": "translate English to Romanian: "\n    }\n  },\n  "transformers_version": "4.14.1",\n  "use_cache": true,\n  "vocab_size": 32128\n}\n')),(0,o.kt)("p",null,"For tasks that are not currently supported, use ",(0,o.kt)("inlineCode",{parentName:"p"},"flaml.tune")," for ",(0,o.kt)("a",{parentName:"p",href:"Tune-HuggingFace"},"customized tuning"),"."),(0,o.kt)("h3",{id:"link-to-jupyter-notebook"},"Link to Jupyter notebook"),(0,o.kt)("p",null,"To run these examples in our Jupyter notebook, please go to:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/FLAML/blob/main/notebook/automl_nlp.ipynb"},"Link to notebook")," | ",(0,o.kt)("a",{parentName:"p",href:"https://colab.research.google.com/github/microsoft/FLAML/blob/main/notebook/automl_nlp.ipynb"},"Open in colab")))}c.isMDXComponent=!0}}]);