class Tag < ApplicationRecord
  has_many :taggings
  has_many :articles, through: :taggings

  validates :slug, format: { with: /\A[a-z0-9]+\z/ }
end
