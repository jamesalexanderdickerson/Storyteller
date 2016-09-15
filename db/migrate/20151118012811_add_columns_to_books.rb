class AddColumnsToBooks < ActiveRecord::Migration
  def change
    add_column :books, :image, :string
    add_column :books, :audio, :string
  end
end
