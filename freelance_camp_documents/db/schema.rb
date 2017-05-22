# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

# ActiveRecord::Schema.define(version: 20170521073937) do

#   create_table "freelance_documents", force: :cascade do |t|
#     t.string   "title"
#     t.string   "description"
#     t.string   "file_url"
#     t.datetime "updated_at",  null: false
#     t.string   "image_url"
#     t.datetime "created_at",  null: false
#   end

# end

10.times do |d|
  FreelanceDocument.create!(
  title:"doucument #{d}",
  description:"this is 111",
  file_url:"https://wenku.baidu.com/view/6942417668eae009581b6bd97f1922791688bed1.html",
  image_url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495364837242&di=7dd33f69c40bfb20a54b52b3f9e25908&imgtype=0&src=http%3A%2F%2Fimg4q.duitang.com%2Fuploads%2Fitem%2F201404%2F29%2F20140429200924_kFEch.thumb.700_0.jpeg"
  )
end
