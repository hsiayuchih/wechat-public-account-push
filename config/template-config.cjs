/* eslint-disable */
const TEMPLATE_CONFIG = [
  {
    id: '0001',
    title: '亲爱的珠珠, 早上好',
    desc: `
      🗓{{date.DATA}}
      
      下个休息日：{{holidaytts.DATA}}
      
      ---
      
      城市🏙️：{{city.DATA}}<br>
      天气☁️：{{weather.DATA}}<br>
      温度🌡️: {{min_temperature.DATA}}--{{max_temperature.DATA}}<br>
      风向💨：{{wind_direction.DATA}}<br>
      风级🍃：{{wind_scale.DATA}}<br>
      温馨提示📌：{{notice.DATA}}
    
      ---
      值得纪念🥰：<br>
      今天是我们相识的第{{love_day.DATA}}天<br>
      <br>
      {{birthday_message.DATA}}
      
      ---
      💗：{{earthy_love_words.DATA}}<br>
      每日一句😋<br>
      中文：{{note_ch.DATA}}<br>
      English：{{note_en.DATA}}<br>
      和{{poetry_author.DATA}}约个会：{{poetry_content.DATA}}
    `
  },
  {
    id: '0002',
    title: '推送完成提醒',
    desc: `
      服务器信息：{{post_time_zone.DATA}} {{post_time.DATA}}
      
      ---
      
      共推送 {{need_post_num.DATA}} 人
      
      成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
      
      成功用户: {{success_post_ids.DATA}}
      
      失败用户: {{fail_post_ids.DATA}}
    `
  },
]

module.exports = TEMPLATE_CONFIG
