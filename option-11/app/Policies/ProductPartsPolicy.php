<?php

namespace {{ namespace }};

use Illuminate\Auth\Access\Response;
use {{ namespacedModel }};
use {{ namespacedUserModel }};

class {{ class }}
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny({{ user }} $user): bool
    {
        //
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view({{ user }} $user, {{ model }} ${{ modelVariable }}): bool
    {
        //
    }

    /**
     * Determine whether the user can create models.
     */
    public function create({{ user }} $user): bool
    {
        //
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update({{ user }} $user, {{ model }} ${{ modelVariable }}): bool
    {
        //
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete({{ user }} $user, {{ model }} ${{ modelVariable }}): bool
    {
        //
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore({{ user }} $user, {{ model }} ${{ modelVariable }}): bool
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete({{ user }} $user, {{ model }} ${{ modelVariable }}): bool
    {
        //
    }
}
