class CreateWorks < ActiveRecord::Migration
  def change
    create_table :works do |t|
      t.string :category
      t.string :title

      t.timestamps null: false
    end
  end
end
