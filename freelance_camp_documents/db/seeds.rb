# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

10.times do |d|
  FreelanceDocument.create!(
  title:"doucument #{d}",
  description:"this is 111",
  file_url:"https://wenku.baidu.com/view/6942417668eae009581b6bd97f1922791688bed1.html",
  image_url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495364837242&di=7dd33f69c40bfb20a54b52b3f9e25908&imgtype=0&src=http%3A%2F%2Fimg4q.duitang.com%2Fuploads%2Fitem%2F201404%2F29%2F20140429200924_kFEch.thumb.700_0.jpeg"
  )
end