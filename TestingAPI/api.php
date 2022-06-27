<?php
require_once("connect.php");


header("Content-type: application/json; charset=utf-8");

class Posts extends  Dbh

{

  public function __construct($id)
  {
$this->id = $id;
/*
$this->title = $title;
$this->body = $body;
*/
  }
      /*  GET ALL POSTS METHOD    */
  public function GetAllPosts()
  {
    try {
      $sql = "SELECT * FROM `posts`";
      $stmt = $this->connect()->query($sql);
      $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
/*
      $data = json_encode($data,JSON_UNESCAPED_UNICODE);
*/

      return $data;
    }
    catch (Exception $e)
     {
echo $e->getMessage();
    }

finally
{
  $stmt = null;
}
  }
/* ------------------------------------- */
/*  GET Post By id Method    */

  public function GetPost($id)
  {
    {
      try {


        $sql = "SELECT * FROM `posts` WHERE `id`=:id";
        $stmt = $this->connect()->prepare($sql);
          $stmt->execute(["id" => $this->id]);
        $data = $stmt->fetch(PDO::FETCH_ASSOC);
        /*
        $data = json_encode($data,JSON_UNESCAPED_UNICODE);
        */
        return $data;

      }
      catch (Exception $e)
       {
    echo $e->getMessage();
      }

    finally
    {

    $stmt = null;

    }
    }
  }
/* -------------------------------- */
/*  Add Post Method   */

  public function AddPost($title,$body)
  {
      try
       {
         $this->connect()->setAttribute(PDO::ATTR_EMULATE_PREPARES,TRUE);
      $sql = "INSERT INTO posts (id,title,body) VALUES (?,?,?)";

      $stmt = $this->connect()->prepare($sql);

      $stmt->execute(array(null,$title,$body));
      $data = $stmt->fetch(PDO::FETCH_ASSOC);
      $post_id = $this->connect()->lastInsertId();
      return  array(
        "status"=> true,
          "post_id" =>$post_id,
      );
      }
    catch (Exception $e)
    {
      echo "Ошибка {$e->getMessage()}";
      exit();
    }

    $stmt = null;
  }
  public function updatePost($data,$id)
  {
    try
     {
    $sql = "UPDATE `posts` SET `title`=:title,`body`=:body WHERE `id`=:id";

    $stmt = $this->connect()->prepare($sql);

    $stmt->execute(["title" => $data["title"],"body" => $data["body"],"id" =>$id]);


    return  array(
      "status"=> true,
        "post_id" =>$id,
        "title"=>$data["title"],
        "body" =>$data["body"]
    );
    }
  catch (Exception $e)
  {
    echo "Ошибка {$e->getMessage()}";
    exit();
  }

  $stmt = null;

  }

  public function deletePost($id)
  {
    try {
      $sql = "DELETE FROM `posts` WHERE `id`=:id";
      $stmt  = $this->connect()->prepare($sql);
      $stmt->execute(["id" => $id]);
      return  array(
        "status"=> true,
          "deleted_post_id" =>$id
        );
    }
    catch (PDOException $e)
     {
      echo "Ошибка {$e->getMessage()}";
      exit();
    }
    $stmt = null;


  }

}

$method = $_SERVER['REQUEST_METHOD'];
$data = array();

$id = $_GET['id'];
$PostsObject = new  Posts($id);




switch ($method) {
  case 'GET':
  if (empty($id))
  {

  array_push($data,$PostsObject->GetAllPosts());

  }

  else
   {

  $getPost =  $PostsObject->GetPost($id);
  if (empty($getPost))
  {
    http_response_code(404);
  $res = ["status"=>False,
  "message" => "Post not found"];
  array_push($data,$res);
  }
  else
  {
  array_push($data,$getPost);
  }
  }
  break;
    case 'POST':
    $postRequest = $PostsObject->AddPost($_POST["title"],$_POST["body"]);
    array_push($data,$postRequest);
      break;
    case 'PATCH':


    $patchRequestData = file_get_contents('php://input');

    $patchRequestData =  json_decode($patchRequestData,true);
    $patchRequest = $PostsObject->updatePost($patchRequestData,$_GET["id"]);
if (empty($patchRequest["post_id"]))
{
    http_response_code(404);
  die("Запрос не выполнен");
}
    array_push($data,$patchRequest);
    http_response_code(200);
    break;
    case "DELETE":
      $deleteRequest = $PostsObject->deletePost($_GET["id"]);
    array_push($data,$deleteRequest);

}


$data = json_encode($data,JSON_UNESCAPED_UNICODE);
echo $data;



 ?>
