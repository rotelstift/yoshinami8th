class CreateTaggings < ActiveRecord::Migration[7.1]
  def change
    create_table :taggings do |t|
      t.references :article, null: false, foreign_key: true
      t.references :tag, null: false, foreign_key: true

      t.timestamps
    end
    add_index :taggings, [:article_id, :tag_id], unique: true
  end
end
