use zed_extension_api::{self as zed, Command, ContextServerId, Project, Result};

const PACKAGE: &str = "canli-mcp";
const SERVER: &str = "node_modules/canli-mcp/src/server.mjs";

struct CanliMcp;

impl zed::Extension for CanliMcp {
    fn new() -> Self {
        Self
    }

    fn context_server_command(
        &mut self,
        _id: &ContextServerId,
        _project: &Project,
    ) -> Result<Command> {
        let latest = zed::npm_package_latest_version(PACKAGE)?;
        if zed::npm_package_installed_version(PACKAGE)?.as_deref() != Some(latest.as_str()) {
            zed::npm_install_package(PACKAGE, &latest)?;
        }
        let dir = std::env::current_dir().map_err(|e| e.to_string())?;
        Ok(Command {
            command: zed::node_binary_path()?,
            args: vec![dir.join(SERVER).to_string_lossy().into_owned()],
            env: vec![],
        })
    }
}

zed::register_extension!(CanliMcp);
