using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BlogApi.DTOs;
using BlogApi.Models;
using BlogApi.Services;

namespace BlogApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PostsController : ControllerBase
{
    private readonly IPostService _postService;

    public PostsController(IPostService postService)
    {
        _postService = postService;
    }

    // GET: api/posts
    [HttpGet]
    public async Task<IActionResult> GetPosts()
    {
        var posts = await _postService.GetPosts();

        return Ok(posts);
    }

    // GET: api/posts
    [HttpGet("{id}")]
    public async Task<IActionResult> GetPost(int id)
    {
        var post = await _postService.GetPost(id);

        if(post==null)
            return NotFound("Post not found!");
           
    return Ok(post);
    }

    // POST: api/post
    [HttpPost]
    public async Task<IActionResult> CreatePost(CreatePostDto dto)
    {
        var post=await _postService.CreatePost(dto);

        return CreatedAtAction(nameof(GetPost), new { id = post.Id }, post);
    }


      // PUT: api/posts/5
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdatePost(int id, UpdatePostDto dto)
    {
       var result=await _postService.UpdatePost(id,dto);

       if(!result)
          return NotFound();

        return NoContent();
    }

    // DELETE: api/posts/id
    [HttpDelete("{id}")]
    public async Task<IActionResult> GetDelete(int id)
    {
        
        var result= await _postService.DeletePost(id);

        if(!result)
            return NotFound();  
           
        return NoContent();
    }
}