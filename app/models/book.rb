class Book < ActiveRecord::Base
  has_and_belongs_to_many :users
  def self.search(search)
	  where("title LIKE ?", "%#{search}%")
	end
end
