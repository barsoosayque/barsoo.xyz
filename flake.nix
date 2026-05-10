{
  inputs = {
    nixpkgs = {
      url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    };
    utils = {
      url = "github:numtide/flake-utils";
    };
  };

  outputs =
    { nixpkgs, utils, ... }:
    utils.lib.eachSystem [ "aarch64-linux" "x86_64-linux" ] (
      system:
      let
        pkgs = import nixpkgs { inherit system; };
      in
      {
        # `nix develop`
        devShells.default = pkgs.mkShell {
          nativeBuildInputs = with pkgs; [ amber-lang ];
        };
      }
    );
}
