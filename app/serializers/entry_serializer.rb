class EntrySerializer < ActiveModel::Serializer

  embed :ids, include: true

  attributes :id, :name, :winner

end
