var rule = {
  类型:'影视',//影视|听书|漫画|小说
  title:'短剧网[短]',
  host:'https://www.duanju2.com',
  url:'/show/fyclassfyfilter.html',
  searchUrl:'/search/**----------fypage---.html',
  searchable:2,
  quickSearch:0,
  filterable:1,
  filter:{ "duanju": [ { "key": "分类", "name": "分类:", "value": [ { "n": "全部", "v": "" }, { "n": "女频恋爱", "v": "女频恋爱" }, { "n": "脑洞悬疑", "v": "脑洞悬疑" }, { "n": "年代穿越", "v": "年代穿越" }, { "n": "古装仙侠", "v": "古装仙侠" }, { "n": "现代都市", "v": "现代都市" }, { "n": "反转", "v": "反转" }, { "n": "爽文", "v": "爽文" }, { "n": "短剧", "v": "短剧" } ] }, { "key": "年代", "name": "年代:", "value": [ { "n": "全部", "v": "" }, { "n": "2024", "v": "2024" }, { "n": "2023", "v": "2023" }, { "n": "2022", "v": "2022" }, { "n": "2021", "v": "2021" }, { "n": "2020", "v": "2020" }, { "n": "2019", "v": "2019" }, { "n": "2018", "v": "2018" }, { "n": "2017", "v": "2017" }, { "n": "2016", "v": "2016" }, { "n": "2015", "v": "2015" }, { "n": "2014", "v": "2014" }, { "n": "2013", "v": "2013" }, { "n": "2012", "v": "2012" } ] }, { "key": "排序", "name": "排序:", "value": [ { "n": "按时间排序", "v": "time" }, { "n": "按人气排序", "v": "hits" }, { "n": "按评分排序", "v": "score" } ] } ] },
  filter_url:'--{{fl.排序}}-{{fl.分类}}-----fypage---{{fl.年代}}',
  headers:{
      'User-Agent':'MOBILE_UA',
  },
  timeout:5000,
  class_parse:'#menu li;a&&Text;a&&href;.*/(.*?)\.html',
  cate_exclude:'排行榜',
  tab_exclude:'播放列表',
  play_parse:true,
  lazy:$js.toString(()=>{
    input = {parse:1,url:input,js:''};
  }),
  double:true,
  推荐:'*',
  一级:'#post-876;.placeholder a&&title;.lazyload&&data-src;.meta-post-type2&&Text;.placeholder a&&href;.meta-views&&Text',
  二级:{
    title:'.lazyload img&&alt;.pricing-options li&&Text',
    img:'.col-lg-4 img&&data-src',
    desc:'.pricing-options li:eq(5)&&Text;.pricing-options li:eq(4)&&Text;.pricing-options li:eq(3)&&Text;.pricing-options li:eq(2)&&Text;.pricing-options li:eq(1)&&Text',
    content:'.data-label&&Text',
    tabs:'.nav-item a',
    lists:'.tab-pane:eq(#id)&&a',
    tab_text:'body&&Text',
    list_text:'body&&Text',
    list_url:'a&&href',
    list_url_prefix: '',
  },
  搜索:'.col-lg-12;.placeholder a&&title;.placeholder img&&data-src;.meta-category-dot&&Text;.placeholder a&&href;.meta-views&&Text',
}