use indicatif::{ProgressBar, ProgressState, ProgressStyle};
use std::{cmp::min, fmt::Write};
use std::thread;
use std::time::Duration;

/**
 * Squared
 * 
 * Calculate the square of a number.
 */
pub fn sqr(x: f64) -> f64 {
    x * x
}

fn by_ref(x: &i32) -> i32 {
    println!("\nRef of (x) is {} and {}", x, *x);

    *x + 1
}

fn modifies(y: &mut f64) {
    println!("\nRef of (y) is {} and {}", y, *y);

    *y = 1.337;
}

/**
 * Start Download
 * 
 * Will manage a download and display progress to the user.
 */
pub fn start_download() {
    let mut downloaded = 0;
    let total_size = 231231231;

    let pb = ProgressBar::new(total_size);
    pb.set_style(ProgressStyle::with_template("{spinner:.green} [{elapsed_precise}] [{wide_bar:.cyan/blue}] {bytes}/{total_bytes} ({eta})")
        .unwrap()
        .with_key("eta", |state: &ProgressState, w: &mut dyn Write| write!(w, "{:.1}s", state.eta().as_secs_f64()).unwrap())
        .progress_chars("#>-"));

    while downloaded < total_size {
        let new = min(downloaded + 223211, total_size);
        downloaded = new;
        pb.set_position(new);
        thread::sleep(Duration::from_millis(12));
    }

    pb.finish_with_message("downloaded");
}
