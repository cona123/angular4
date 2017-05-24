
# 10.times do |i|
# Proposal.create! (
#   customer: "customer #{i}",
#   portfolio_url: 'http://www.baidu.com',
#   tools: 'ruby on rails,angular 4,sqlite3',
#   estimated_hours: (80+ i),
#   hourly_rate: 123,
#   weeks_to_complete: 12,
#   client_email: "398292548@qq.com"
# ) 
# end

10.times do |proposal|
  Proposal.create!(
    customer: "Customer #{proposal}",
    portfolio_url: 'http://portfolio.jordanhudgens.com',
    tools: 'Ruby on Rails, Angular 2, and Postgres',
    estimated_hours: (80 + proposal),
    hourly_rate: 120,
    weeks_to_complete: 12,
    client_email: 'jordan@devcamp.com',
  )
end