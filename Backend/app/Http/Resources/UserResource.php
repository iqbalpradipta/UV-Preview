<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    public $status;
    public $messages;
    public $resource;


    public function __construct($status, $messages, $resource)
    {
        parent::__construct($resource);
        $this->status = $status;
        $this->messages = $messages;
    }

    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'success' => $this->status,
            'messages' => $this->messages,
            'data' => $this->resource,
        ];
    }
}

