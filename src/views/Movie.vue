<template>
    <div class="container d-flex justify-content-center align-items-center flex-column">
        <h3 class="mt-5 mb-3 card-title">Movie title</h3>
        <div class="card">
            <div class="row no-gutters">
                <div class="col-4">
                    <img src="../assets/2.jpg" class="card-img" alt="test-alt" />
                </div>
                <div class="col-8">
                    <div class="h-100 card-body d-flex flex-column justify-content-between">
                        <div>
                            <p class="card-text m-0">
                                <small class="text-muted">Gatunek: {}</small>
                            </p>
                            <p class="card-text">
                                <small class="text-muted">Kraj produkcji: {}</small>
                            </p>
                            <p class="card-text">Movie description.</p>
                        </div>
                        <div class="d-flex justify-content-between">
                            <p class="card-text">
                                <small class="text-muted">Views: {} | Votes: {}</small>
                            </p>

                            <p class="card-text">
                                <small class="text-muted">IMDBLink</small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Movie",
};
</script>

<style lang="scss" scoped>
</style>