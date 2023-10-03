// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
fn log(message: String) {
    println!("{}", message);
}

#[tauri::command]
fn openfile(path: String) -> String {
    let contents = std::fs::read_to_string(path);
    match contents {
        Ok(contents) => contents,
        Err(e) => format!("Error: {}", e.to_string()),
    }
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet])
        .invoke_handler(tauri::generate_handler![log])
        .invoke_handler(tauri::generate_handler![openfile])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
