class Tag < ApplicationRecord
  has_many :taggings
  has_many :articles, through: :taggings

  validates :name, :slug, presence: true
  validates :slug, format: { with: /\A[a-z0-9]+\z/ }
end
