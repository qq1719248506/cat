var rule = {
  类型:'影视',//影视|听书|漫画|小说
  title:'',
  host:'',
  url:'',
  searchUrl:'',
  searchable:2,
  quickSearch:0,
  filterable:1,
  filter:'',
  filter_url:'',
  filter_def:{},
  headers:{
      'User-Agent':'MOBILE_UA',
  },
  timeout:5000,  
  class_parse:'#side-menu li;a&&Text;a&&href;/(.*?)\.html',
  cate_exclude:'',
  //class_name:'电影&电视剧&动漫&综艺',
  //class_url:'1&2&3&4',
  play_parse:true,
  lazy:$js.toString(()=>{
    input = {parse:1,url:input,js:''};
  }),
  double:true,
  推荐:'列表1;列表2;标题;图片;描述;链接;详情',
  一级:'列表;标题;图片;描述;链接;详情',
  二级:{
    title:'vod_name;vod_type',
    img:'图片链接',
    desc:'主要信息;年代;地区;演员;导演',
    content:'简介',
    tabs:'',
    lists:'xx:eq(#id)&&a',
    tab_text:'body&&Text',
    list_text:'body&&Text',
    list_url:'a&&href',
    list_url_prefix: '',
  },
  搜索:'列表;标题;图片;描述;链接;详情',
}