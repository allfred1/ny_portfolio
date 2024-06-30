{ pkgs }: {
  channel = "stable-23.11";
  packages = [
    pkgs.nodejs_20
  ];
  idx.extensions = [
    "esbenp.prettier-vscode"
    "dsznajder.es7-react-js-snippets"
    "SpaceBox.spacebox-ui"
    "BrandonKirbyson.vscode-animations"
    "bradlc.vscode-tailwindcss"
    "csstools.postcss"
    "christian-kohler.path-intellisense"
    "christian-kohler.npm-intellisense"
    "oderwat.indent-rainbow"
    "heybourn.headwind"
    "dbaeumer.vscode-eslint"
    "usernamehw.errorlens"
    "EditorConfig.EditorConfig"
    "formulahendry.auto-complete-tag"
    "TabNine.tabnine-vscode"
  ];
  idx.previews = {
    previews = {
      web = {
        command = [
          "npm"
          "run"
          "dev"
          "--"
          "--port"
          "$PORT"
          "--hostname"
          "0.0.0.0"
        ];
        manager = "web";
      };
    };
  };
  # Services.docker.enable = true;
  
}
