class Goal < ApplicationRecord
  has_many :objective, dependent: :destroy
end