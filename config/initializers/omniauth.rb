OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook, "752161714927161", "d1a2f8e23e9b7bb7c4f365ec36319a8c"
end
