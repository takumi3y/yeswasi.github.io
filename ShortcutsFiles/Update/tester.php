$array = [
    'Version' = [
       '1.0'
    ],
    'Link' = [
       '...'
    ],
    'Comment' = [
       'Test'
    ]
];

// Origin null is not allowed by Access-Control-Allow-Origin.とかのエラー回避の為、ヘッダー付与
header("Access-Control-Allow-Origin: *");

echo json_encode($array);
