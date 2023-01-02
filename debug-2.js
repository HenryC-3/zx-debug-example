// import "zx/globals"

try {
    const output = await $`neofetch`
    console.log(output.stdout.trim())
} catch (error) {
    console.log(error)
}
