function verifyLogin(url) {
  let cnt = 0;
  let cookie = '';
  let r = Math.random();
  let yzm_url = getHome(url) + '/index.php/verify/index.html';
  log(`验证码链接:${yzm_url}`);
  let submit_url = getHome(url) + '/index.php/ajax/verify_check';
  log(`post登录链接:${submit_url}`);
  while (cnt < OCR_RETRY) {
    try {
      let { cookie, html } = reqCookie(yzm_url + '?r=' + r, { toBase64: true });
      let code = OcrApi.classification(html);
      log(`第${cnt + 1}次验证码识别结果:${code}`);
      html = post(submit_url, {
        headers: { Cookie: cookie },
        body: 'type=search&verify=' + code,
      });
      html = JSON.parse(html);

      if (html.code === 1) {
        log(`第${cnt + 1}次验证码提交成功`);
        log(cookie);
        return cookie // 需要返回cookie
      } else if (html.code !== 1 && cnt + 1 >= OCR_RETRY) {
        cookie = ''; // 需要清空返回cookie
      }
    } catch (e) {
      log(`第${cnt + 1}次验证码提交失败:${e.message}`);
      if (cnt + 1 >= OCR_RETRY) {
        cookie = '';
      }
    }
    cnt += 1
  }
  return cookie
}

globalThis.verifyLogin = verifyLogin;

var rule = {
  类型: '影视',//影视|听书|漫画|小说
  title: '耐看播',
  host: 'https://www.nkvod.com',
  url: '/show/fyfilter.html',
  searchUrl: '/nk/**----------fypage---.html',
  searchable: 2,
  quickSearch: 0,
  filterable: 1,
  filter: {
    "1": [{ "key": "分类", "name": "分类", "value": [{ "n": "全部", "v": "1" }] }, { "key": "类型", "name": "类型", "value": [{ "n": "全部", "v": "" }, { "n": "喜剧", "v": "喜剧" }, { "n": "爱情", "v": "爱情" }, { "n": "恐怖", "v": "恐怖" }, { "n": "动作", "v": "动作" }, { "n": "科幻", "v": "科幻" }, { "n": "剧情", "v": "剧情" }, { "n": "战争", "v": "战争" }, { "n": "警匪", "v": "警匪" }, { "n": "犯罪", "v": "犯罪" }, { "n": "动画", "v": "动画" }, { "n": "奇幻", "v": "奇幻" }, { "n": "武侠", "v": "武侠" }, { "n": "冒险", "v": "冒险" }, { "n": "枪战", "v": "枪战" }, { "n": "恐怖", "v": "恐怖" }, { "n": "悬疑", "v": "悬疑" }, { "n": "惊悚", "v": "惊悚" }, { "n": "经典", "v": "经典" }, { "n": "青春", "v": "青春" }, { "n": "文艺", "v": "文艺" }, { "n": "微电影", "v": "微电影" }, { "n": "古装", "v": "古装" }, { "n": "历史", "v": "历史" }, { "n": "运动", "v": "运动" }, { "n": "农村", "v": "农村" }, { "n": "儿童", "v": "儿童" }, { "n": "网络电影", "v": "网络电影" }] }, { "key": "地区", "name": "地区", "value": [{ "n": "全部", "v": "" }, { "n": "大陆", "v": "大陆" }, { "n": "香港", "v": "香港" }, { "n": "台湾", "v": "台湾" }, { "n": "美国", "v": "美国" }, { "n": "法国", "v": "法国" }, { "n": "英国", "v": "英国" }, { "n": "日本", "v": "日本" }, { "n": "韩国", "v": "韩国" }, { "n": "德国", "v": "德国" }, { "n": "泰国", "v": "泰国" }, { "n": "印度", "v": "印度" }, { "n": "意大利", "v": "意大利" }, { "n": "西班牙", "v": "西班牙" }, { "n": "加拿大", "v": "加拿大" }, { "n": "其他", "v": "其他" }] }, { "key": "年份", "name": "年份", "value": [{ "n": "全部", "v": "" }, { "n": "2025", "v": "2025" }, { "n": "2024", "v": "2024" }, { "n": "2023", "v": "2023" }, { "n": "2022", "v": "2022" }, { "n": "2021", "v": "2021" }, { "n": "2020", "v": "2020" }, { "n": "2019", "v": "2019" }, { "n": "2018", "v": "2018" }, { "n": "2017", "v": "2017" }, { "n": "2016", "v": "2016" }, { "n": "2015", "v": "2015" }, { "n": "2014", "v": "2014" }, { "n": "2013", "v": "2013" }, { "n": "2012", "v": "2012" }, { "n": "2011", "v": "2011" }, { "n": "2010", "v": "2010" }] }, { "key": "排序", "name": "排序", "value": [{ "n": "按最新", "v": "time" }, { "n": "按最热", "v": "hits" }, { "n": "按评分", "v": "score" }] }],
    "2": [{ "key": "分类", "name": "分类", "value": [{ "n": "全部", "v": "2" }, { "n": "国产剧", "v": "13" }, { "n": "港台剧", "v": "14" }, { "n": "日韩剧", "v": "15" }, { "n": "欧美剧", "v": "16" }, { "n": "其他剧", "v": "20" }] }, { "key": "类型", "name": "类型", "value": [{ "n": "全部", "v": "" }, { "n": "古装", "v": "古装" }, { "n": "战争", "v": "战争" }, { "n": "青春偶像", "v": "青春偶像" }, { "n": "喜剧", "v": "喜剧" }, { "n": "家庭", "v": "家庭" }, { "n": "犯罪", "v": "犯罪" }, { "n": "动作", "v": "动作" }, { "n": "奇幻", "v": "奇幻" }, { "n": "剧情", "v": "剧情" }, { "n": "历史", "v": "历史" }, { "n": "经典", "v": "经典" }, { "n": "乡村", "v": "乡村" }, { "n": "情景", "v": "情景" }, { "n": "商战", "v": "商战" }, { "n": "网剧", "v": "网剧" }, { "n": "其他", "v": "其他" }] }, { "key": "地区", "name": "地区", "value": [{ "n": "全部", "v": "" }, { "n": "内地", "v": "内地" }, { "n": "韩国", "v": "韩国" }, { "n": "香港", "v": "香港" }, { "n": "台湾", "v": "台湾" }, { "n": "日本", "v": "日本" }, { "n": "美国", "v": "美国" }, { "n": "泰国", "v": "泰国" }, { "n": "英国", "v": "英国" }, { "n": "新加坡", "v": "新加坡" }, { "n": "其他", "v": "其他" }] }, { "key": "年份", "name": "年份", "value": [{ "n": "全部", "v": "" }, { "n": "2025", "v": "2025" }, { "n": "2024", "v": "2024" }, { "n": "2023", "v": "2023" }, { "n": "2022", "v": "2022" }, { "n": "2021", "v": "2021" }, { "n": "2020", "v": "2020" }, { "n": "2019", "v": "2019" }, { "n": "2018", "v": "2018" }, { "n": "2017", "v": "2017" }, { "n": "2016", "v": "2016" }, { "n": "2015", "v": "2015" }, { "n": "2014", "v": "2014" }, { "n": "2013", "v": "2013" }, { "n": "2012", "v": "2012" }, { "n": "2011", "v": "2011" }, { "n": "2010", "v": "2010" }, { "n": "2009", "v": "2009" }, { "n": "2008", "v": "2008" }, { "n": "2006", "v": "2006" }, { "n": "2005", "v": "2005" }, { "n": "2004", "v": "2004" }] }, { "key": "排序", "name": "排序", "value": [{ "n": "按最新", "v": "time" }, { "n": "按最热", "v": "hits" }, { "n": "按评分", "v": "score" }] }],
    "3": [{ "key": "类型", "name": "类型", "value": [{ "n": "全部", "v": "" }, { "n": "选秀", "v": "选秀" }, { "n": "情感", "v": "情感" }, { "n": "访谈", "v": "访谈" }, { "n": "播报", "v": "播报" }, { "n": "旅游", "v": "旅游" }, { "n": "音乐", "v": "音乐" }, { "n": "美食", "v": "美食" }, { "n": "纪实", "v": "纪实" }, { "n": "曲艺", "v": "曲艺" }, { "n": "生活", "v": "生活" }, { "n": "游戏互动", "v": "游戏互动" }, { "n": "财经", "v": "财经" }, { "n": "求职", "v": "求职" }] }, { "key": "地区", "name": "地区", "value": [{ "n": "全部", "v": "" }, { "n": "内地", "v": "内地" }, { "n": "港台", "v": "港台" }, { "n": "日韩", "v": "日韩" }, { "n": "欧美", "v": "欧美" }] }, { "key": "年份", "name": "年份", "value": [{ "n": "全部", "v": "" }, { "n": "2025", "v": "2025" }, { "n": "2024", "v": "2024" }, { "n": "2023", "v": "2023" }, { "n": "2022", "v": "2022" }, { "n": "2021", "v": "2021" }, { "n": "2020", "v": "2020" }, { "n": "2019", "v": "2019" }, { "n": "2018", "v": "2018" }, { "n": "2017", "v": "2017" }, { "n": "2016", "v": "2016" }, { "n": "2015", "v": "2015" }, { "n": "2014", "v": "2014" }, { "n": "2013", "v": "2013" }, { "n": "2012", "v": "2012" }, { "n": "2011", "v": "2011" }, { "n": "2010", "v": "2010" }, { "n": "2009", "v": "2009" }, { "n": "2008", "v": "2008" }, { "n": "2007", "v": "2007" }, { "n": "2006", "v": "2006" }, { "n": "2005", "v": "2005" }, { "n": "2004", "v": "2004" }] }, { "key": "排序", "name": "排序", "value": [{ "n": "按最新", "v": "time" }, { "n": "按最热", "v": "hits" }, { "n": "按评分", "v": "score" }] }],
    "4": [{ "key": "类型", "name": "类型", "value": [{ "n": "全部", "v": "" }, { "n": "情感", "v": "情感" }, { "n": "科幻", "v": "科幻" }, { "n": "热血", "v": "热血" }, { "n": "推理", "v": "推理" }, { "n": "搞笑", "v": "搞笑" }, { "n": "冒险", "v": "冒险" }, { "n": "萝莉", "v": "萝莉" }, { "n": "校园", "v": "校园" }, { "n": "动作", "v": "动作" }, { "n": "机战", "v": "机战" }, { "n": "运动", "v": "运动" }, { "n": "战争", "v": "战争" }, { "n": "少年", "v": "少年" }, { "n": "少女", "v": "少女" }, { "n": "社会", "v": "社会" }, { "n": "原创", "v": "原创" }, { "n": "亲子", "v": "亲子" }, { "n": "益智", "v": "益智" }, { "n": "励志", "v": "励志" }, { "n": "其他", "v": "其他" }] }, { "key": "地区", "name": "地区", "value": [{ "n": "全部", "v": "" }, { "n": "国产", "v": "国产" }, { "n": "日本", "v": "日本" }, { "n": "欧美", "v": "欧美" }, { "n": "其他", "v": "其他" }] }, { "key": "年份", "name": "年份", "value": [{ "n": "全部", "v": "" }, { "n": "2025", "v": "2025" }, { "n": "2024", "v": "2024" }, { "n": "2023", "v": "2023" }, { "n": "2022", "v": "2022" }, { "n": "2021", "v": "2021" }, { "n": "2020", "v": "2020" }, { "n": "2019", "v": "2019" }, { "n": "2018", "v": "2018" }, { "n": "2017", "v": "2017" }, { "n": "2016", "v": "2016" }, { "n": "2015", "v": "2015" }, { "n": "2014", "v": "2014" }, { "n": "2013", "v": "2013" }, { "n": "2012", "v": "2012" }, { "n": "2011", "v": "2011" }, { "n": "2010", "v": "2010" }, { "n": "2009", "v": "2009" }, { "n": "2008", "v": "2008" }, { "n": "2007", "v": "2007" }, { "n": "2006", "v": "2006" }, { "n": "2005", "v": "2005" }, { "n": "2004", "v": "2004" }] }, { "key": "排序", "name": "排序", "value": [{ "n": "按最新", "v": "time" }, { "n": "按最热", "v": "hits" }, { "n": "按评分", "v": "score" }] }]
  },
  filter_url: '{{fl.分类}}-{{fl.地区}}-{{fl.排序}}-{{fl.类型}}-----fypage---{{fl.年份}}',
  filter_def: { '1': { 分类: '1' }, '2': { 分类: '2' }, '3': { 分类: '3' }, '4': { 分类: '4' } },
  headers: {
    'User-Agent': 'MOBILE_UA',
  },
  timeout: 5000,
  class_parse: 'ul.swiper-wrapper li;a&&Text;a&&href;.*/(\\d+)',
  cate_exclude: '',
  play_parse: true,
  lazy: $js.toString(() => {
    input = { parse: 1, url: input, js: '' };
  }),
  double: true,
  推荐: '*',
  一级: '.public-list-box;.public-list-div a&&title;.lazy&&data-src||src;.public-list-subtitle&&Text;.public-list-div a&&href',
  二级: {
    title: 'h3&&Text;.slide-info&&Text',
    img: '.lazy&&data-src||src',
    desc: '.slide-info:eq(4)&&Text;.slide-info-remarks:eq(0)&&Text;.slide-info-remarks:eq(1)&&Text;.slide-info:eq(3)&&Text;.slide-info:eq(2)&&Text',
    content: '#height_limit&&Text',
    tabs: '.anthology-tab a',
    lists: '.anthology-list-play:eq(#id)&&a',
    tab_text: 'body&&Text',
    list_text: 'body&&Text',
    list_url: 'a&&href',
    list_url_prefix: '',
  },
  //搜索: '.public-list-box;.thumb-txt a&&title;.lazy&&data-src||src;.public-list-prb&&Text;.public-list-exp&&href;.cor5.thumb-blurb&&Text',
  搜索: $js.toString(() => {
    let cookie = getItem(RULE_CK, '');
    //log('储存的cookie:' + cookie);

    let ret = request(MY_URL, {
      headers: {
        Referer: encodeUrl(MY_URL),
        Cookie: cookie,
      }
    });
    if (/请输入验证码/.test(ret)) {
      //log(ret);
      cookie = verifyLogin(MY_URL);
      if (cookie) {
        log(`本次成功过验证,cookie:${cookie}`);
        setItem(RULE_CK, cookie);
      } else {
        log(`本次验证失败,cookie:${cookie}`);
      }
      ret = request(MY_URL, {
        headers: {
          Referer: encodeUrl(MY_URL),
          Cookie: cookie,
        }
      });
    }
    //log(ret);
    let d = [];
    let html = ret;
    let list = pdfa(html, '.public-list-box');
    list.forEach(item => {
      var title = pdfh(item, '.thumb-txt a&&title');
      var pic = pdfh(item, '.lazy&&data-src||src');
      var desc = pdfh(item, '.cor5.thumb-blurb&&Text');
      var content = pdfh(item, '.public-list-prb&&Text');
      var url = pdfh(item, '.public-list-exp&&href');

      if (title) {
        d.push({
          title: title,
          img: pic,
          desc: desc,
          content: content,
          url: url
        });
      }
    });
    setResult(d);
  }),
  搜索验证标识:'系统安全验证',
}