class CreateFreelanceDocuments < ActiveRecord::Migration[5.0]
  def change
    create_table :freelance_documents do |t|
      t.string :title
      t.string :description
      t.string :file_url
      t.string :updated_at
      t.string :image_url

      t.timestamps
    end
  end
end
